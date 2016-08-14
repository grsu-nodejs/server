var responseHandler = require('./responseHandler');

function scrapDayArticles(response, query) {
    var year = query.year;
    var month = query.month;
    var day = query.day;

    responseHandler.returnArticles(response, year, month, day);
}

function scrapArticle(response, query) {
    var id = query.id;

    responseHandler.returnParagraphs(response, id);
}

exports.scrapArticle = scrapArticle;

exports.scrapDay = scrapDayArticles;
