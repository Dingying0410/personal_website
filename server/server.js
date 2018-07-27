//will find express under node modules
var express = require('express')

var cors = require('cors')

var indexRouter = require("./routes/index")

var mongoose = require("mongoose")

var path = require("path")

mongoose.connect("mongodb://user001:12345@ds151433.mlab.com:51433/art_website")

//an example of node.js from the express website
var app = express()

var restRouter = require("./routes/rest");

//request with app/v1 will call the restRouter
app.use("/api/v1", cors(), restRouter);

app.use(express.static(path.join(__dirname, "../public")))

app.use('/', indexRouter)

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))