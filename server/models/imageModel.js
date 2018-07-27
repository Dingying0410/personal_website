var mongoose = require("mongoose")

//Load MongoDB and define the model for the tour

var schema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    id: Number
});

// our model
var imageModel = mongoose.model('ImageModel', schema);

module.exports = imageModel