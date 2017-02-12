import {batchActions} from "redux-batched-actions";

export const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        articles: articles
    }
};

export const fetchArticles = (date) => {
    return {
        type: "FETCH_ARTICLES",
        date: date
    }
};