function route(handlers, pathName, response) {

    if (typeof handlers[pathName] === 'function') {
        handlers[pathName](response);
    } else {
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
