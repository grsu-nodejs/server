const Koa = require('koa');
const app = new Koa();
var urlModule = require('url');
var config = require('../config');

function start(route, handlers) {

    function onRequest(request, response) {
        var urlParts = urlModule.parse(request.url, true);
        var pathname = urlParts.pathname;
        var query = urlParts.query;

        route(handlers, pathname, response, query);
    }

    app.use(async (ctx, next) => {
        await next();
        const { request, res } = ctx;
        onRequest(request, res);
    });

    const port = config.get('port');
    app.listen(port);

    console.log(`listening on port ${port}`);
}

exports.start = start;