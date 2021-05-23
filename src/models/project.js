const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    project: {
        type: String,
        required: true
    },
    tasks: [{
        task: {
            type: String,
            required: true
        },
        skill: {
            type: String,
            required: true,
            trim: true
        },
        startDate: {
            type: Date,
            required: true
        }
    }]
})

const Project = new mongoose.model("Project", projectSchema)

module.exports = Project