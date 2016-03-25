function route(handlers, pathName, response, query) {

    if (typeof handlers[pathName] === 'function') {
        handlers[pathName](response, query);
    } else {
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
