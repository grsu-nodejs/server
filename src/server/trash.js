var request = require("request"),
    cheerio = require("cheerio"),
    parser = require("./trash"),
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

            var title = $(".itemhead a[rel=bookmark]").text();
            var author = $(".metadata strong").text();
            var meta = $(".itemhead > p").text();
            var date = meta.substring(meta.indexOf(author) + author.length + 2, meta.indexOf("Кейворды") - 1);

            articles.push({
                href: link,
                title: title,
                author: author,
                text: str,
                date: date
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