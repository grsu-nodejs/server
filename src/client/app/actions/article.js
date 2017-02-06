import * as Optional from "optional-js";
import co from "co";

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

export const fetchParagraphsIfNeeded = (article) => {
    return (dispatch) => {
        let {_id: id, paragraphs} = article;

        Optional.ofNullable(paragraphs)
            .map(paragraphs => dispatch(triggerSpoiler(id)))
            .orElseGet(() => co(function*() {
                let data = yield fetch(`/article?id=${id}`);
                let paragraphs = yield data.json();

                dispatch(expandArticle({_id: id, paragraphs: paragraphs}));
            }));
    }
};