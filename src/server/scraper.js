/**
 * Created by andrew on 3/25/2016.
 */
var request = require('request');
var cheerio = require('cheerio');

function scrapWithParseMethod(res, responseMethod, parseMethod) {

    var content = [];
    var http = 'http://s13.ru/archives/';
    for (var i = 3; i < arguments.length; i++) {
        http += arguments[i] + '/';
    }

    request(http, function (error, response, body) {
        if (error || response.statusCode == 503) {
            scrapWithParseMethod(arguments);
        } else {
            var $ = cheerio.load(body);

            parseMethod($, content);
        }
        responseMethod(res, content);
    });
}

exports.scrapWithParseMethod = scrapWithParseMethod;
