// build your `/api/resources` router here
const express = require('express')

const Resource = require('./model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    await Resource.getResource()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
    .then(resource => 
        res.status(200).json(resource))
    .catch(next)
})

module.exports = router;