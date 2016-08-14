var server = require('./server/server');
var router = require('./server/router');
var requestHandlers = require('./server/requestHandlers');

var handlers = {
    '/allArticles': requestHandlers.allArticles,
    '/day': requestHandlers.fetchDay,
    '/article': requestHandlers.fetchArticle
};

server.start(router.route, handlers);
