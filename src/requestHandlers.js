var parser = require("./parser");

function allArticles(response) {
    parser.getAllArticles(response);
}

exports.allArticles = allArticles;
