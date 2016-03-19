var request = require("request"),
    http = require("http"),
    urlModule = require("url"),
    url = "http://s13.ru/";

function start(route, handlers) {

    function onRequest(request, response) {

        var pathname = urlModule.parse(request.url).pathname;

        route(handlers, pathname, response);
    }

    http.createServer(onRequest).listen(8080);
}

exports.start = start;
