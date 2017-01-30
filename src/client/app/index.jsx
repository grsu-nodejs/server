import React, {Component} from "react";
import {render} from "react-dom";
import app from "./reducers/index";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./components/App";
import thunk from "redux-thunk";
import promise from "redux-promise";
import createLogger from "redux-logger";

const logger = createLogger();
const store = createStore(
    app,
    applyMiddleware(thunk, promise, logger),
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);