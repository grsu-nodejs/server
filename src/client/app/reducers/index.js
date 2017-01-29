import {combineReducers} from "redux";
import articles from "./articles";
import date from "./date";

const app = combineReducers({
    articles,
    date
});

export default app;