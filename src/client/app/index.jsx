import React, {Component} from "react";
import {render} from "react-dom";
import app from "./reducers/index";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App";
import {loadArticles} from "./actions/index";

let store = createStore(app);

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

store.dispatch(loadArticles([
    {_id: 123, text: 'allahu akbar'}
]));