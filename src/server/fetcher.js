var request = require('request');
var cheerio = require('cheerio');

function fetchWithParseMethod(res, responseMethod, parseMethod) {

    var content = [];
    var http = 'http://s13.ru/archives/';
    var potentialId = arguments[arguments.length - 1];
    for (var i = 3; i < arguments.length; i++) {
        http += arguments[i] + '/';
    }

    request(http, function(error, response, body) {
        if (error || response.statusCode == 503) {
            fetchWithParseMethod(arguments);
        } else {
            var $ = cheerio.load(body);

            parseMethod($, content);
        }
        responseMethod(res, content, potentialId);
    });
}

exports.fetchWithParseMethod = fetchWithParseMethod;
