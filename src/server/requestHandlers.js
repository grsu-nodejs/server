var trash = require("./trash");
var scraper = require("./scraper");
var parser = require("./parser");

function allArticles(response) {
    trash.getLoadedArticlesJSON(response);
}

function scrapDayArticles(response, query) {
    var year = query['year'];
    var month = query['month'];
    var day = query['day'];

    scraper.scrapDay(response, year, month, day);
}

function scrapArticle(response, query) {
    var id = query['id'];

    scraper.scrapArticle(response, id);
}

exports.scrapArticle = scrapArticle;
exports.allArticles = allArticles;
exports.scrapDay = scrapDayArticles;
