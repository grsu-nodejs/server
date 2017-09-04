var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handlers = {
    '/allArticles': requestHandlers.allArticles,
    '/day': requestHandlers.fetchDay,
    '/article': requestHandlers.fetchArticle
};

server.start(router.route, handlers);