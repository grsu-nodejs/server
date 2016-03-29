/**
 * Created by andrew on 3/26/2016.
 */
var fs = require('fs');

function loadResource(pathName, response) {
    if (pathName == "/")
        pathName = "/index.html";
    var url = "./src/ui" + pathName;

    fs.readFile(url, function (err, file) {
        if (!err) {
            response.writeHeader(200, {
                "Content-Type": "text/" + pathName.substring(pathName.lastIndexOf('.') + 1)
            });
            response.write(file);
            response.end();
        } else {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write("404 Not found");
            response.end();
        }
    });
}

exports.loadResource = loadResource;