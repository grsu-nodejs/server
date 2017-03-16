import {combineReducers} from 'redux';
import articles from './articles';
import date from './date';
import {loadingBarReducer} from 'react-redux-loading-bar';

const app = combineReducers({
    articles,
    date,
    loadingBar: loadingBarReducer
});

export default app;