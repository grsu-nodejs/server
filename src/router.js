var resource = require("./resourceLoader");

function route(handlers, pathName, response, query) {

    if (typeof handlers[pathName] === 'function') {
        handlers[pathName](response, query);
    } else {
        resource.loadResource(pathName, response);
    }
}

exports.route = route;
