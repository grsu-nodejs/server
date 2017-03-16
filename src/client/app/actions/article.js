import * as constants from '../constants/constants';

export const triggerSpoiler = (id) => {
    return {
        type: constants.TRIGGER_SPOILER,
        id: id,
    };
};

export const expandArticle = (article) => {
    let {_id: id, paragraphs} = article;

    return {
        type: constants.EXPAND_ARTICLE,
        id: id,
        paragraphs: paragraphs
    };
};

export const fetchParagraphs = (article) => {
    return {
        type: constants.FETCH_PARAGRAPHS,
        article: article,
    };
};