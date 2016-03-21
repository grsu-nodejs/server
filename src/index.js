var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");


var handlers = {
    "/" : requestHandlers.allArticles,
    "/allArticles" : requestHandlers.allArticles
};
server.start(router.route, handlers);
