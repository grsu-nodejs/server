var request = require("request"),
    cheerio = require("cheerio"),
    parser = require("./parser"),
    url = "http://s13.ru/";


var articles = [];

function getAllArticles(response) {

    response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    request(url, function (error, res, body) {
        if (!error) {
            var $ = cheerio.load(body);
            var links = [];

            $("head > link[rel=archives]").each(function () {
                links.push({
                    href: $(this).attr('href') + '/0',
                    title: $(this).attr('title')
                });
            });

            links.forEach(function (item) {
                sendRequest(item.href, item.title);
            });


            response.write(JSON.stringify(articles));

            response.end("");

        } else {
            response.end("error" + error);
        }
    });
}

function sendRequest(link, title) {
    request(link, function (error, response, body) {

        if (!error) {
            if (response.statusCode === 503) {

                sendRequest(link, title);

            } else {

                var $page = cheerio.load(body);

                var links = [];

                $page("#wp-calendar > tbody a").each(function () {
                    links.push({
                        href: $page(this).attr('href')
                    });
                });

                links.forEach(function (item) {
                    getArticlesForDay(item.href);
                });

            }
        }
    });
}

function getArticlesForDay(link) {
    request(link, function (error, response, body) {
        if (!error) {
            var links = [];

            var $ = cheerio.load(body);

            $(".itemhead a[rel=bookmark]").each(function () {
                links.push({
                    href: $(this).attr('href')
                });
            });

            links.forEach(function (item) {
                getArticle(item.href);
            });
        }
    });
}

function getArticle(link) {
    request(link, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            var str = "";
            $(".itemtext p").each(function () {
                str += $(this).text();
            });

            articles.push({
                text: str,
                title: $(".itemhead a[rel=bookmark]").text()
            });

        }


    });
}

exports.getAllArticles = getAllArticles;
