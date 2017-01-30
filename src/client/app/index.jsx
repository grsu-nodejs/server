import React, {Component} from "react";
import {render} from "react-dom";
import app from "./reducers/index";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./components/App";
import thunk from "redux-thunk";

const store = createStore(
    app,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);