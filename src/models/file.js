const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: {
        type: String
    },
    file: {
        contentType: String,
        data: Buffer
    }
})

const File = new mongoose.model('File', fileSchema);

module.exports = File