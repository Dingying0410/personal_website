var TourModel = require("../models/tourModel")

var getTours = function() {

    return new Promise((resolve, reject) => {
        TourModel.find({}, function (error, tours) {
            if (error) {
                reject(error)
            } else {
                resolve(tours)
            }

        })
        //resolve(Tours)
        // console.log(resolve(Tours))
    });
}

var getTour = function(id) {
    console.log(id)
    return new Promise((resolve, reject) => {
       TourModel.findOne({id : id}, function (error, tour) {
           if (error) {
               reject(error)
           } else {
               resolve(tour)
           }
       })
    });
}

var addTour = function(newTour) {
    return new Promise((resolve, reject) => {
        TourModel.findOne({name : newTour.name}, function (error, tour) {
            if (tour) {
                reject("Tour name exists")
            } else {
                TourModel.count({}, function (error, count) {
                    newTour.id = count + 1
                    var tourInDB = new TourModel(newTour)
                    tourInDB.save()
                    resolve(newTour)
                })
            }
        })
    })
}

//for other components to call the problems, like the router
module.exports =  {
    getTours: getTours,
    getTour: getTour,
    addTour: addTour
}