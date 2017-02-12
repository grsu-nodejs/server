export const triggerSpoiler = (id) => {
    return {
        type: 'TRIGGER_SPOILER',
        id: id,
    }
};

export const expandArticle = (article) => {
    let {_id: id, paragraphs} = article;

    return {
        type: 'EXPAND_ARTICLE',
        id: id,
        paragraphs: paragraphs
    }
};

export const fetchParagraphs = (article) => {
    return {
        type: 'FETCH_PARAGRAPHS',
        article: article,
    }
};