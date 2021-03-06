const Koa = require('koa');
const config = require('../config');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const port = config.get('port');
const { getArticles, getParagraphs } = require('./controllers/articles');
const { errorHandler } = require('./middlewares');

router.get('/day', getArticles);
router.get('/article', getParagraphs);

app.use(errorHandler);
app.use(router.routes());

app.listen(port);
console.log(`listening on port ${port}`);