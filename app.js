var express = require('express')
var app = express()


app.listen(8080, function() {
    console.log("[GSS CERT] Server ON")
})

app.get('/', function(req,res) {
    res.send("<h1>Welcome</h1>")
})