const article = (state, action) => {
    if (state._id != action.id) {
        return state;
    }

    switch (action.type) {
        case 'EXPAND_ARTICLE':
            return {
                ...state,
                paragraphs: action.paragraphs,
                isCollapsed: !state.isCollapsed
            };
        default:
            return state;
    }
};

export default article;