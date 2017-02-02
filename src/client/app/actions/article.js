import * as Optional from "optional-js";
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
        Optional.ofNullable(paragraphs)
            .map(paragraphs => dispatch(triggerSpoiler(id)))
            .orElseGet(() => {
                fetch(`/article?id=${id}`)
                    .then(data => data.json())
                    .then(paragraphs => dispatch(expandArticle(id, paragraphs)))
            });
    }
};