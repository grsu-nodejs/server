/**
 * Created by andrew on 3/25/2016.
 */
var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://s13.ru/",
    parser = require("./parser");

function scrapDay(res, year, month, day) {
    var entries = [];
    url = "http://s13.ru/archives/date/" + year + "/" + month + "/" + day;

    request(url, function (error, response, body) {
        if (error || response.statusCode == 503)
            scrapDay(res, year, month, day);
        else {
            var $ = cheerio.load(body);

            parser.parseForEntries($, entries);
        }

        res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
        res.write(JSON.stringify(entries));
        res.end("");

    });
}

function scrapArticle(res, id) {
    var paragraphs = [];
    url = "http://s13.ru/archives/" + id;

    request(url, function (error, response, body) {
        if (error || response.statusCode == 503)
            scrapArticle(res, id);
        else {
            var $ = cheerio.load(body);

            parser.parseForParagraphs($, paragraphs);
        }
        res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
        res.write(JSON.stringify(paragraphs));
        res.end("");

    });
}


exports.scrapArticle = scrapArticle;
exports.scrapDay = scrapDay;