var request = require("request"),
    http = require("http"),
    urlModule = require("url"),
    url = "http://s13.ru/",
    parser = require("./parser");

function start(route, handlers) {

    function onRequest(request, response) {

        var pathname = urlModule.parse(request.url).pathname;

        route(handlers, pathname, response);
    }

    parser.loadAllArticles();
    http.createServer(onRequest).listen(8080);
}

exports.start = start;
