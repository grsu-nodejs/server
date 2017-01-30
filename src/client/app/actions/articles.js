export const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        articles: articles
    }
};

export const fetchArticles = (date) => {
    return (dispatch) => {
        fetch(date.format('[/day?year=]YYYY[&month=]MM[&day=]DD'))
            .then(data => data.json())
            .then(paragraphs => dispatch(loadArticles(paragraphs)))
    }
};