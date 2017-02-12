import {put, takeEvery} from "redux-saga/effects";
import {triggerSpoiler, expandArticle} from "../actions/article";
import {loadArticles} from "../actions/articles";
import {changeDate} from "../actions/date";
import {batchActions} from "redux-batched-actions";
import * as Optional from "optional-js";

function* fetchParagraphsIfNeeded(action) {
    let {_id: id, paragraphs} = action.article;

    yield* Optional.ofNullable(paragraphs)
        .map(function*() {
            yield put(triggerSpoiler(id))
        })
        .orElseGet(function*() {
            let data = yield fetch(`/article?id=${id}`);
            let paragraphs = yield data.json();

            yield put(expandArticle({_id: id, paragraphs: paragraphs}));
        });
}

function* fetchArticles(action) {
    let {date} = action;

    let data = yield fetch(date.format('[/day?year=]YYYY[&month=]MM[&day=]DD'));
    let articles = yield data.json();

    yield put(batchActions([
        loadArticles(articles),
        changeDate(date)
    ]))
}

function* sagas() {
    yield [
        takeEvery("FETCH_PARAGRAPHS", fetchParagraphsIfNeeded),
        takeEvery("FETCH_ARTICLES", fetchArticles)
    ]
}

export default sagas;