var parser = require("./parser");

function allArticles(response) {
    parser.getLoadedArticlesJSON(response);
}

exports.allArticles = allArticles;
