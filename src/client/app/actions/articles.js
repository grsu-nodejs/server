import {batchActions} from "redux-batched-actions";
import {changeDate} from "./date";
import co from "co";

export const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        articles: articles
    }
};

export const fetchArticles = (date) => {
    return (dispatch) => co(function*() {
        let data = yield fetch(date.format('[/day?year=]YYYY[&month=]MM[&day=]DD'));
        let articles = yield data.json();

        dispatch(batchActions([
            loadArticles(articles),
            changeDate(date)
        ]));
    });
};