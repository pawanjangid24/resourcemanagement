const express = require('express')
const router = express.Router();
const Project = require('../models/project')


router.post('/project', async(req, res) => {

    const project = new Project(req.body)

    try{
        const result = await project.save()

        if(!result){
            return res.status(500).send('not able to update')
        }

        res.send(result)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/projects', async(req, res) => {
    try{
        const project = await Project.find({})

        if(!project || project.length === 0) {
            return res.status(500).send('no data avaiable')
        }

        res.send(project)
    }catch(e){
        res.status(500).send('something went wrong')
    }
})

module.exports = router