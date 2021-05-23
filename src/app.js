var express = require('express');
require('./db/mongoose')
var app = express();
var resourceRouter = require('./router/resource')
var projectRouter = require('./router/project')
var fileRouter = require('./router/file');
const fileUpload = require('express-fileupload');


app.use(express.json());
app.use(fileUpload());
app.use(resourceRouter);
app.use(projectRouter);
app.use(fileRouter)

module.exports = app