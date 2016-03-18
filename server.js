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
			$ = cheerio.load(body),
        	links = [];

            $("head > link[rel=archives]").each(function () {
                links.push({
                    href:$(this).attr('href') + '/0',
                    title:$(this).attr('title')
                });
      		});
            
	    	links.forEach(function(item,i){
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

        $page = cheerio.load(body);
        
        if(response.statusCode === 503){
            
            sendRequest(link,title);
            
        } else {
            
            var links = [];

            $page("#wp-calendar > tbody a").each(function () {
                links.push({
                          href:$(this).attr('href')
                    });
            });
            
            links.forEach(function(item){
                console.log(item.href);
            });

        }
    });
}

function getArticlesForDay(link){
    request(link, function (error, response, body) {
        
        var links = [];

        $("#wp-calendar > tbody a").each(function () {
            links.push({
                      href:$(this).attr('href')
                });
        });
        
    	links.forEach(function(item,i){
            console.log(item.href);
    	});
        
	});
}

function start(){
	http.createServer(accept).listen(8080);
}

exports.start = start;