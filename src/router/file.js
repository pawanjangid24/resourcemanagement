const express = require('express')
const router = express.Router()
const fileUpload = require('express-fileupload')
const fs = require('fs')
const File = require('../models/file')

router.post('/uploadFile', async(req, res) => {

    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('no file uploaded')
    }

    try {

        console.log(req.files.sampleFile.data.toString('utf8'))

        var fileData = req.files.sampleFile.data.toString('utf8');

        console.log('after file data')

        const file = new File({
            name: req.files.sampleFile.name,
            file: {
                type: 'text', 
                data: fileData
            }
        })

        const result = await file.save()

        if(!result) {
            return res.status(500).send('not able to upload')
        }

        res.send(result)

    }catch(err) {
        
        res.status(500).send(err)
    }
})

router.get('/files/:fileTag', async(req, res) => {
    
    try{
        const files = await File.find({
            name : {
                "$regex": req.params.fileTag,
                "$options": "i"
            }
        })

        if(!files || files.length === 0){
            return res.status(400).send('no data found')
        }

        res.send(files)
    }catch(err){
        res.status(500).send('something went wrong')
    }
})

module.exports = router