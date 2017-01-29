import article from "./article";

const articles = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES':
            return action.articles.map(entry => {
                return {...entry, isCollapsed: true}
            });
        case 'CHANGE_VISIBILITY':
            return state.map(entry => article(entry, action));
        case 'EXPAND_ARTICLE':
            return state.map(entry => article(entry, action));
        default:
            return state;
    }
};

export default articles;