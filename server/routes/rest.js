//express router example
var express = require("express");

var router = express.Router();

var tourServices = require("../services/tourService");

var bodyParser = require("body-parser")

var jsonParser = bodyParser.json()

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
            res.json(tour)
        }, function (error) {
            res.status(400).send("Add tour error")
        })
})

module.exports = router;