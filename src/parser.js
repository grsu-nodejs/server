var request = require("request"),
    cheerio = require("cheerio"),
    parser = require("./parser"),
    url = "http://s13.ru/";

var articles = [];

function getLoadedArticlesJSON(response) {

    response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    response.write(JSON.stringify(articles));

    response.end("");
}

function loadAllArticles() {
    request(url, function (error, response, body) {

        if (error || response.statusCode === 503)
            loadAllArticles();
        else
            loadDataBySelectorWithMethod(body, "head > link[rel=archives]", loadArticlesPerMonth);
    });
}

function loadArticlesPerMonth(link) {
    request(link, function (error, response, body) {

        if (error || response.statusCode === 503)
            loadArticlesPerMonth(link);
        else
            loadDataBySelectorWithMethod(body, "#wp-calendar > tbody a", loadArticlesPerDay);
    });
}

function loadArticlesPerDay(link) {
    request(link, function (error, response, body) {

        if (error || response.statusCode === 503)
            loadArticlesPerDay(link);
        else
            loadDataBySelectorWithMethod(body, ".itemhead a[rel=bookmark]", loadArticle);
    });
}

function loadArticle(link) {
    request(link, function (error, response, body) {
        if (error || response.statusCode === 503) {
            loadArticle(link)
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


function loadDataBySelectorWithMethod(body, selector, withMethod) {
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

exports.getLoadedArticlesJSON = getLoadedArticlesJSON;
exports.loadAllArticles = loadAllArticles;