/**
 * Created by andrew on 4/6/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/s13';

function jsonResponse(res, content) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    res.write(JSON.stringify(content));

    res.end('');
}

function saveAndReturnArticle(res, content) {
    jsonResponse(res, content);

    insertWithMethod(content, insertArticles);
}

function saveAndReturnParagraphs(res, content) {
    jsonResponse(res, content);

    insertWithMethod(content, insertParagraphs);
}

function insertWithMethod(content, insertMethod) {
    MongoClient.connect(url, function (err, db) {
        insertMethod(content, db);
        db.close();
    });
}

function insertArticles(articles, db) {
    db.collection('articles').insertMany(articles);
}

function insertParagraphs(articles, db) {
    db.collection('paragraphs').insertMany(articles);
}

exports.saveAndReturnParagraphs = saveAndReturnParagraphs;

exports.saveAndReturnArticle = saveAndReturnArticle;
