import {batchActions} from 'redux-batched-actions';
import * as constants from '../constants/constants';

export const loadArticles = (articles) => {
    return {
        type: constants.LOAD_ARTICLES,
        articles: articles
    };
};

export const fetchArticles = (date) => {
    return {
        type: constants.FETCH_ARTICLES,
        date: date
    };
};