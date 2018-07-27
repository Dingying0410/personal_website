//express router example
var express = require("express");

var router = express.Router();

var tourServices = require("../services/tourService");

var imageServices = require("../services/imageService");

var bodyParser = require("body-parser")

var jsonParser = bodyParser.json()

var fs = require('fs')

var path = require('path')

router.get("/tours", function(req, res){
    // res.send("tours")
    tourServices.getTours()
        .then(tours => res.json(tours));
})

router.get("/tours/:id", function (req, res) {
    console.log(req.params.id)
    tourServices.getTour(+req.params.id)
        .then(tour => res.json(tour))
})

//use the json parser as a middleware
router.post("/tours", jsonParser, function (req, res) {
    //console.log(req.body)
    tourServices.addTour(req.body)
        .then(function (tour) {
            console.log(tour)
            res.json(tour)
        }, function (error) {
            res.status(404).send("Add tour error")
        })
})

router.put("/tours", jsonParser, function (req, res) {
    console.log(req.body)
    tourServices.updateTour(req.body)
        .then(function (tour) {
            res.json(tour)
        }, function (error) {
            res.status(404).send("update tour error")
        })
})

router.get("/tourImages/:id", jsonParser, function(req, res) {
    const id = +req.params.id
    console.log("id = " + id)
    imageServices.getImage(id)
        .then(function (images) {
            console.log("Getting images from the server: ")
            console.log(images)
            res.send(images)

        }, function (error) {
            res.status(404).send("Get image error")
        })
})

router.get("/tourImages/:id" + '/:name', jsonParser, function(req, res) {
    const id = +req.params.id
    const name = req.params.name
    console.log("id = " + id)
    console.log("name = " + name)
    res.sendFile(path.join(__dirname, './../images/' + id + '/' + name))
})


module.exports = router;