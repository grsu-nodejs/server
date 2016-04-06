var server = require('./server/server');
var router = require('./server/router');
var requestHandlers = require('./server/requestHandlers');

var handlers = {
    '/allArticles': requestHandlers.allArticles,
    '/day': requestHandlers.scrapDay,
    '/article': requestHandlers.scrapArticle,
    '/': requestHandlers.index
};
server.start(router.route, handlers);
