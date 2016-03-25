/**
 * Created by andrew on 3/25/2016.
 */
var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://s13.ru/";

function scrapDay(res, year, month, day) {
    var entries = [];
    url = "http://s13.ru/archives/date/" + year + "/" + month + "/" + day;

    request(url, function (error, response, body) {
        if (error || response.statusCode != 200)
            scrapDay(response, year, month, day);
        else {
            var $ = cheerio.load(body);

            loadDayEntries($, entries);
        }
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.write(JSON.stringify(entries));

        res.end("");

    });
}
function loadDayEntries($, entries) {
    $(".entry").each(function () {
        var data = $(this);
        var title = data.find("a").text();
        var href = data.find("a").attr('href');
        var text = data.children().first().next().find("p").text();
        var author = data.find("strong").text();
        var meta = data.find("p").text();
        var fulldate = meta.substring(meta.indexOf(author) + author.length + 2, meta.indexOf("Кейворды") - 1);
        var time = fulldate.substring(fulldate.indexOf(',') + 2);
        var date = fulldate.substring(0, fulldate.indexOf(','));

        entries.push({
            href: href,
            author: author,
            date: date,
            time: time,
            title: title,
            text: text
        });
    });
}

function loadEntry(url, res) {

    console.log(url);
    request(url, function (error, response, body) {
        if (error || response.statusCode != 200)
            loadEntry(url, response);
        else {
            var $ = cheerio.load(body);
            var str = "";
            $(".itemtext p").each(function () {
                str += $(this).text();
            });
        }
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.write(JSON.stringify(str));

        res.end("");

    });


}
exports.loadEntry = loadEntry;
exports.scrapDay = scrapDay;