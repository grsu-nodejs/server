var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");


var handlers = {}
handlers["/"] = requestHandlers.allArticles;
handlers["/allArticles"] = requestHandlers.allArticles;

server.start(router.route, handlers);
