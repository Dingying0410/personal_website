var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    path = require('path')
    fs = require('fs');


http.createServer(function(req, res) {
    /* Process the form uploads */
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();

        form.multiples = true
        form.uploadDir = __dirname + './../images/1'
        form.on('file', function(field, file) {
            fs.rename(file.path, path.join(form.uploadDir, file.name));
        });

        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });

        return;
    }

    /* Display the file upload form. */
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );

}).listen(8080);