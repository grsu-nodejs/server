export const triggerSpoiler = (id) => {
    return {
        type: 'TRIGGER_SPOILER',
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

export const fetchParagraphsIfNeeded = (id, paragraphs) => {
    return (dispatch) => {
        !!paragraphs ? dispatch(triggerSpoiler(id))
            : fetch(`/article?id=${id}`)
                .then(data => data.json())
                .then(paragraphs => dispatch(expandArticle(id, paragraphs)));
    }
};