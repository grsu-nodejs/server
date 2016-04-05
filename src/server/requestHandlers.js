//var trash = require("./trash");
//function allArticles(response) {
//    trash.getLoadedArticlesJSON(response);
//}
//exports.allArticles = allArticles;

var scraper = require('./scraper');
var parser = require('./parser');
var responseHandler = require('./responseHandler');

function scrapDayArticles(response, query) {
    var year = query.year;
    var month = query.month;
    var day = query.day;

    scraper.scrapWithParseMethod(response, responseHandler.saveAndReturnArticle, parser.parseForEntries, 'date', year, month, day);
}

function scrapArticle(response, query) {
    var id = query.id;

    scraper.scrapWithParseMethod(response, responseHandler.saveAndReturnParagraphs, parser.parseForParagraphs, id);
}

exports.scrapArticle = scrapArticle;

exports.scrapDay = scrapDayArticles;
