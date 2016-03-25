var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");


var handlers = {
    "/" : requestHandlers.allArticles,
    "/allArticles" : requestHandlers.allArticles,
    "/day" : requestHandlers.scrapDay,
    "/article" : requestHandlers.scrapArticle
};
server.start(router.route, handlers);
