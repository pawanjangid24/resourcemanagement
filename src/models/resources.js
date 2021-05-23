const mongoose = require('mongoose')

const resourceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    skill: {
        type: String,
        required: true,
        trim: true
    },
    availability: {
        type: Date,
        required: true
    }
})

const Resource = new mongoose.model('Resource', resourceSchema);

module.exports = Resource;