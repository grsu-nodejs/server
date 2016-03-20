var request = require("request"),
    cheerio = require("cheerio"),
    parser = require("./parser"),
    url = "http://s13.ru/";

var articles = [];

function getAllArticlesJSON(response) {

    response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    response.write(JSON.stringify(articles));

    response.end("");
}

function loadDate() {
    request(url, function (error, response, body) {

        if (error || response.statusCode === 503)
            loadDate(link);
        else
            loadDataBySelectorWith(body, "head > link[rel=archives]", sendRequest);
    });
}

function sendRequest(link) {
    request(link, function (error, response, body) {

        if (error || response.statusCode === 503)
            sendRequest(link);
        else
            loadDataBySelectorWith(body, "#wp-calendar > tbody a", getArticlesForDay);
    });
}

function getArticlesForDay(link) {
    request(link, function (error, response, body) {

        if (error || response.statusCode === 503)
            getArticlesForDay(link);
        else
            loadDataBySelectorWith(body, ".itemhead a[rel=bookmark]", getArticle);
    });
}

function getArticle(link) {
    request(link, function (error, response, body) {
        if (error || response.statusCode === 503) {
            getArticle(link)
        }
        else {
            var $ = cheerio.load(body);
            var str = "";
            $(".itemtext p").each(function () {
                str += $(this).text();
            });

            articles.push({
                text: str,
                title: $(".itemhead a[rel=bookmark]").text(),
                href: link
            });
        }
    });
}


function loadDataBySelectorWith(body, selector, withMethod) {
    var links = [];
    var $page = cheerio.load(body);

    $page(selector).each(function () {
        links.push({
            href: $page(this).attr('href')
        });
    });

    links.forEach(function (item) {
        withMethod(item.href);
    });
}

exports.getAllArticlesJSON = getAllArticlesJSON;
exports.loadDate = loadDate;