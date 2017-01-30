export const changeVisibility = (id) => {
    return {
        type: 'CHANGE_VISIBILITY',
        id: id,
    }
};

export const expandArticle = (id) => {
    //TODO CALL TO SERVER INSTEAD paragraphs: [{text: 'test'}, {text: 'test2'}]
    return {
        type: 'EXPAND_ARTICLE',
        id: id,
        paragraphs: [{text: 'test'}, {text: 'test2'}]
    }
};

export const loadArticles = (date) => {
    //TODO CALL TO SERVER INSTEAD articles: [{_id: 1234, text: 'text'}]
    return {
        type: 'LOAD_ARTICLES',
        articles: [{_id: 1234, text: 'text'}]
    }
};

export const changeDate = (date) => {
    return {
        type: 'CHANGE_DATE',
        date: date
    }
};