var express = require('express');
var router = express.Router();
var Resource = require('../models/resources')

router.post('/resource', async(req, res) => {
    const resource = new Resource(req.body)
    try{
        const response = await resource.save();
        if(!response) {
           return res.status(500).send('not able to post')
        }
        res.send(response)
    }catch(err){
        res.status(500).send(err)
    }
})

router.get('/resources', async(req, res) => {

    try{

        let query = {};

        if(req.query.skill){
            query.skill = {
                "$regex": req.query.skill,
                "$options": "i"
            }            
        }

        if(req.query.availability){
            query.availability = {
                "$gte": req.query.availability
            } 
        }

        const result = await Resource.find(query)

        if(!result || result.length === 0){
            return res.status(500).send('resource not available')
        }

        res.send(result);
    }catch(err){
        res.status(500).send("something went wrong")
    }
   
})

module.exports = router