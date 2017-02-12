import React, {Component} from "react";
import {render} from "react-dom";
import app from "./reducers/index";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./components/App";
import promise from "redux-promise";
import createLogger from "redux-logger";
import {enableBatching} from "redux-batched-actions";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas/index";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    enableBatching(app),
    applyMiddleware(sagaMiddleware, promise, logger),
);

sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);