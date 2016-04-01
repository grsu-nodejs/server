var http = require('http');
var urlModule = require('url');
var url = 'http://s13.ru/';
var config = require('../../config');

function start(route, handlers) {

    function onRequest(request, response) {
        var urlParts = urlModule.parse(request.url, true);
        var pathname = urlParts.pathname;
        var query = urlParts.query;

        route(handlers, pathname, response, query);
    }

    http.createServer(onRequest).listen(config.get('port'));
}

exports.start = start;
