function route(handlers, pathName, response, query) {

    if (typeof handlers[pathName] === 'function') {
        handlers[pathName](response, query);
    }
}

exports.route = route;
