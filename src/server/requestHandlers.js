var responseHandler = require('./responseHandler');

function fetchDayArticles(response, query) {
    var year = query.year;
    var month = query.month;
    var day = query.day;

    responseHandler.returnArticles(response, year, month, day);
}

function fetchArticle(response, query) {
    var id = query.id;

    responseHandler.returnParagraphs(response, id);
}

exports.fetchArticle = fetchArticle;

exports.fetchDay = fetchDayArticles;
