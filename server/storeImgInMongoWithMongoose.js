var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// img path
var imgPath = 'images/new-york.jpg';

// connect to mongo
mongoose.connect("mongodb://user001:12345@ds151433.mlab.com:51433/art_website")

// example schema
var schema = new Schema({
    img: { data: Buffer, contentType: String },
    id: Number
});

// our model
var A = mongoose.model('ImageModel', schema);

mongoose.connection.on('open', function () {
    console.error('mongo is open');

    // empty the collection
    A.remove(function (err) {
        if (err) throw err;

        console.error('removed old docs');

        // store an img in binary in mongo
        var a = new A;
        a.id = 1;
        a.img.data = fs.readFileSync(imgPath);

        //console.log(a.img.data);
        //console.log("Utf 8 "+ new Buffer(a.img.data).toString('utf8'))
        a.id = 1;
        a.img.contentType = 'image/img';
        a.save(function (err, a) {
            if (err) throw err;

            console.error('saved img to mongo');

            // start a demo server

            var http = require('http')
            var app = express()
            //var server = http.createServer(app);
            app.get('/', function (req, res, next) {
                A.findById(a, function (err, doc) {
                    if (err) return next(err);
                    res.contentType(doc.img.contentType);
                    res.send(doc.img.data);
                });
            });

            app.on('close', function () {
                console.error('dropping db');
                mongoose.connection.db.dropDatabase(function () {
                    console.error('closing db connection');
                    mongoose.connection.close();
                });
            });

            // app.listen(3333, function (err) {
            //     var address = app.address();
            //     console.error('server listening on http://%s:%d', address.address, address.port);
            //     console.error('press CTRL+C to exit');
            // });

            // process.on('SIGINT', function () {
            //     app.close();
            // });
        });
    });

});