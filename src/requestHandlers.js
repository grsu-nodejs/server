var parser = require("./parser");
var scraper = require("./scraper");

function allArticles(response) {
    parser.getLoadedArticlesJSON(response);
}

function scrapDayArticles(response, query) {
    var year = query['year'];
    var month = query['month'];
    var day = query['day'];

    scraper.scrapDay(response, year, month, day);
}

function scrapArticle(response, query){
    var id = query['id'];

    scraper.loadEntry(response, id);
}

exports.scrapArticle = scrapArticle;
exports.allArticles = allArticles;
exports.scrapDay = scrapDayArticles;
