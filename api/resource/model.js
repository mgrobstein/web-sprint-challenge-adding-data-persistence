// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResource(){
    return db('resources')
}

async function createResource(resource){
    const [resource_id] = await db('resources').insert(resource)
    return db('resources').where({ resource_id }).first()
}

module.exports = {
    getResource,
    createResource
}