var mongoose = require("mongoose")

//Load MongoDB and define the model for the tour

var tourSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String
})

var tourModel = mongoose.model("TourModel", tourSchema)

module.exports = tourModel