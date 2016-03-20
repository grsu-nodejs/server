var parser = require("./parser");

function allArticles(response) {
    parser.getAllArticlesJSON(response);
}

exports.allArticles = allArticles;
