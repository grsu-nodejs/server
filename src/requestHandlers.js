var parser = require("./parser");
var scraper = require("./scraper");

function allArticles(response) {
    parser.getLoadedArticlesJSON(response);
}

function scrapDayArticles(response, query) {
    var year = query['year']
    var month = query['month'];
    var day = query['day'];

    scraper.scrapDay(year, month, day, response);
}

function scrapArticle(response, query){
    var href = query['href'];

    scraper.loadEntry(href, response);
}
exports.scrapArticle = scrapArticle;
exports.allArticles = allArticles;
exports.scrapDay = scrapDayArticles;
