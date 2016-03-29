/**
 * Created by andrew on 3/25/2016.
 */
var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://s13.ru/";

function scrapWithParseMethod(res, parseMethod){

    var content = [];
    url = "http://s13.ru/archives/";
    for (var i = 2; i < arguments.length; i++) {
        url += arguments[i] + '/';
    }

    request(url, function (error, response, body) {
        if (error || response.statusCode == 503)
            scrapDay(arguments);
        else {
            var $ = cheerio.load(body);

            parseMethod($, content);
        }

        res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
        res.write(JSON.stringify(content));
        res.end("");

    });
}

exports.scrapWithParseMethod = scrapWithParseMethod;