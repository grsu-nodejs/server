import article from './article';
import * as constants from '../constants/constants';

const articles = (state = [], action) => {
    switch (action.type) {
        case constants.LOAD_ARTICLES:
            return action.articles.map(entry => {
                return {...entry, isCollapsed: true}
            });
        case constants.EXPAND_ARTICLE:
            return state.map(entry => article(entry, action));
        case constants.TRIGGER_SPOILER:
            return state.map(entry => article(entry, action));
        default:
            return state;
    }
};

export default articles;