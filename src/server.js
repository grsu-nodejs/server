var http = require("http"),
    urlModule = require("url"),
    url = "http://s13.ru/",
    parser = require("./parser");

function start(route, handlers) {

    function onRequest(request, response) {
        var urlParts = urlModule.parse(request.url, true);
        var pathname = urlParts.pathname;
        var query = urlParts.query;

        route(handlers, pathname, response, query);
    }

    //parser.loadAllArticles();
    http.createServer(onRequest).listen(8080);
}

exports.start = start;
