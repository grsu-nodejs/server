const api = require('../api');

exports.getArticles = async ctx => {
    const articles = await api.getArticles(ctx.query);

    ctx.body = articles;
    ctx.status = 200;
};

exports.getParagraphs = async ctx => {
    const paragraphs = await api.getParagraphs(ctx.query.id);

    ctx.body = paragraphs;
    ctx.status = 200;
};