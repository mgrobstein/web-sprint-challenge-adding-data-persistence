// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = require('express').Router()




router.get('/', async (req, res, next) => {
    await Projects.getProjects()
    .then(resp => {
        resp.map(project => {
            project.project_completed=(!!project.project_completed)
        }) 
        res.status(200).json(resp)

    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.createProject(req.body)
    .then(project => {
        project.project_completed=(!!project.project_completed)
        res.status(201).json(project)})
    .catch(next)
})

module.exports = router;