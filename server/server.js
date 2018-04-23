//will find express under node modules
var express = require('express')

var mongoose = require("mongoose")

mongoose.connect("mongodb://user001:12345@ds151433.mlab.com:51433/art_website")

//an example of node.js from the express website
var app = express()

var restRouter = require("./routes/rest");

//ant request with app/v1 will call the restRouter
app.use("/api/v1", restRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))