const parser = require('./parser');
const client = require('./client');

async function getArticles(date) {
    let { data } = await client.get(`/date/${date.year}/${date.month}/${date.day}`);

    return parser.parseArticles(data, date);
}

async function getParagraphs(id) {
    let { data } = await client.get(`/${id}`);

    return parser.parseParagraphs(data);
}

exports.getArticles = getArticles;
exports.getParagraphs = getParagraphs;