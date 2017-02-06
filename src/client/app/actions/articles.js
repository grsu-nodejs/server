import {batchActions} from "redux-batched-actions";
import {changeDate} from "./date";

export const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        articles: articles
    }
};

export const fetchArticles = (date) => {
    return (dispatch) => {
        let gen = generator(dispatch, date);

        gen.next().value
            .then(data => gen.next(data).value)
            .then(paragraphs => gen.next(paragraphs).value);
    }
};

export function* generator(dispatch, date) {
    let data = yield fetch(date.format('[/day?year=]YYYY[&month=]MM[&day=]DD'));
    let json = yield data.json();

    dispatch(batchActions([
        loadArticles(json),
        changeDate(date)
    ]));
}