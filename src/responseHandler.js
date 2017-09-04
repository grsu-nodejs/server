var fetcher = require('./fetcher');
var parser = require('./parser');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var table = 'articles';
var url = 'mongodb://localhost:27017/s13';

var monthsNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function jsonResponse(res, content) {
    res.body = JSON.stringify(content);
}

function saveAndReturnArticle(res, content) {
    jsonResponse(res, content);

    mongoConnectWithMethod(insertArticles, content);
}

function saveAndReturnParagraphs(res, content, articleId) {
    jsonResponse(res, content);

    mongoConnectWithMethod(insertParagraphs, content, articleId);
}

function mongoConnectWithMethod(dbMethod, content, id, callback) {
    MongoClient.connect(url, function (err, db) {
        dbMethod(db, content, function (content, isDatabaseAvailable) {
            if (isDatabaseAvailable) {
                db.close();
            }
            if (callback) {
                callback(content);
            }
        }, id);
    });
}

function insertArticles(db, articles, callback) {
    if (db) {
        db.collection(table).insertMany(articles);
        callback();
    }
}

function insertParagraphs(db, paragraphs, callback, articleId) {
    if (db) {
        db.collection(table).updateOne({
            _id: articleId
        }, {
            $set: {
                paragraphs: paragraphs
            }
        });
        callback();
    }
}

function returnArticles(response, year, month, day, content) {
    var date = day + ' ' + monthsNames[month - 1] + ' ' + year + ' года';

    mongoConnectWithMethod(findArticles, content, date, function (content) {
        if (content) {
            console.log("fromBase");
            jsonResponse(response, content);
        } else {
            console.log("no in base");
            fetcher.fetchWithParseMethod(response, saveAndReturnArticle, parser.parseForEntries, 'date', year, month, day);
        }
    });

}

function returnParagraphs(response, id, content) {
    mongoConnectWithMethod(findParagraphs, content, id, function (content) {
        if (content) {
            console.log("fromBase");
            jsonResponse(response, content);
        } else {
            console.log("no in base");
            fetcher.fetchWithParseMethod(response, saveAndReturnParagraphs, parser.parseForParagraphs, id);
        }
    });
}

function findParagraphs(db, paragraphs, callback, articleId) {
    try {
        db.collection('articles').find({
            _id: articleId
        }, {
            paragraphs: 1
        }).limit(1).next(function (err, doc) {
            paragraphs = doc.paragraphs;
            callback(paragraphs, true);
        });
    } catch (error) {
        callback(paragraphs, false);
    }
}

function findArticles(db, articles, callback, date) {
    try {
        db.collection('articles').find({
            date: date
        }).toArray(function (err, doc) {
            if (doc.length > 0) {
                articles = doc;
            }
            callback(articles, true);
        });
    } catch (error) {
        callback(articles, false);
    }
    ;
}

exports.returnParagraphs = returnParagraphs;

exports.returnArticles = returnArticles;
