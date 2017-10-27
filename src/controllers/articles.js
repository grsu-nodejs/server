const api = require('../api');

exports.getArticles = async ctx => {
    const articles = await api.getArticles(ctx.params);

    ctx.body = articles;
    ctx.status = 200;
};

exports.getParagraphs = async ctx => {
    const paragraphs = await api.getParagraphs(ctx.params.id);

    ctx.body = paragraphs;
    ctx.status = 200;
};