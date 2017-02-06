import * as Optional from "optional-js";
import co from "co";

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
            .orElseGet(() => co(function*() {
                let data = yield fetch(`/article?id=${id}`);
                let paragraphs = yield data.json();

                dispatch(expandArticle(id, paragraphs));
            }));
    }
};