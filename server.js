var request = require("request"),
    cheerio = require("cheerio"),
    http = require("http"),
    url = "http://s13.ru/";


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
				      href:$(this).attr('href'),
				      title:$(this).attr('title')
				});
			});

			var count = 0 ;

	    	links.forEach(function(item,i,links){
				request(item.href, function (error, response, body) {
					$page = cheerio.load(body);
					console.log(count++ +" "+ $page("head > title").text());
				});
	    	});

		    res.end(links.length.toString());
		} else {
			res.end("BAD");
		}
	});
		
}






http.createServer(accept).listen(8080);