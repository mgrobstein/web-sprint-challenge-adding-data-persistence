// build your `/api/tasks` router here
// build your `/api/resources` router here
const express = require('express')

const Tasks = require('./model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    await Tasks.getTasks()
    .then(task => {
        task.map(task => {
            task.task_completed=(!!task.task_completed)
        })
        res.status(200).json(task)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.createTasks(req.body)
    .then(tasks => {
        tasks.task_completed=(!!tasks.task_completed)
            res.status(201).json(tasks)
    })
    .catch(next)
})

module.exports = router;