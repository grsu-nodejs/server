var request = require("request"),
    cheerio = require("cheerio"),
    http = require("http"),
    url = "http://s13.ru/";

var articles = [];

function accept(req, res) {

	res.writeHead(200, {
	    "Content-Type": "text/html; charset=utf-8"
	});

	request(url, function (error, response, body) {
		if (!error) {
			$ = cheerio.load(body);
        	var links = [];

            $("head > link[rel=archives]").each(function () {
                links.push({
                    href:$(this).attr('href') + '/0',
                    title:$(this).attr('title')
                });
      		});
            
	    	links.forEach(function(item){
               sendRequest(item.href,item.title);
	    	});

		    res.end(links.length.toString());
            
		} else {
			res.end("error" + error);
		}
	});	
}

function sendRequest(link, title) {
    request(link, function (error, response, body) {

        
        if(response.statusCode === 503){
            
            sendRequest(link,title);
            
        } else {
            
            $page = cheerio.load(body);
            
            var links = [];

            $page("#wp-calendar > tbody a").each(function () {
                links.push({
                        href:$(this).attr('href')
                    });
            });
            
            links.forEach(function(item){
                getArticlesForDay(item.href);
            });

        }
    });
}

function getArticlesForDay(link){
    request(link, function (error, response, body) {
        
        var links = [];
        
        $ = cheerio.load(body);

        $(".itemhead a[rel=bookmark]").each(function () {
            links.push({
                    href:$(this).attr('href')
                });
        });
        
    	links.forEach(function(item){
            getArticle(item.href);
    	});
        
	});
}
function getArticle(link){
    request(link, function (error, response, body) {
        
        $ = cheerio.load(body);
        var str = "";
        $(".itemtext p").each(function () {
            str += $(this).text();
        });

        articles.push({
            text:str,
            title:$(".itemhead a[rel=bookmark]").text()
        });
        
        articles.forEach(function(item){
            console.log(item);
    	});
        
    });
}

function start(){
	http.createServer(accept).listen(8080);
}

exports.start = start;