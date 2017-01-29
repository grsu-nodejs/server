export const changeVisibility = (id) => {
    return {
        type: 'CHANGE_VISIBILITY',
        id: id,
    }
};

export const expandArticle = (id, paragraphs) => {
    return {
        type: 'EXPAND_ARTICLE',
        id: id,
        paragraphs: paragraphs
    }
};

export const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        articles: articles
    }
};


export const changeDate = (date) => {
    return {
        type: 'CHANGE_DATE',
        date: date
    }
};