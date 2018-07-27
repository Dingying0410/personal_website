/**
 * Module dependencies
 */
var imageModel = require('../models/imageModel'),
    fs = require('fs'),
    path = require('path')


var getImage = function(id) {
    return new Promise((resolve, reject) => {
        var dir = path.join(__dirname, './../images/' + id)
        fs.readdir(dir, (err, files) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                console.log(files)
                resolve(files)
            }
        })
    })

}

module.exports = {
    getImage: getImage,
    //postImage: postImage
}