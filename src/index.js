var app = require('./app')
var PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("server is listening on: "+PORT);
})