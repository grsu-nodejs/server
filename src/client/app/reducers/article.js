const article = (state, action) => {
    if (state._id != action.id) {
        return state;
    }

    switch (action.type) {
        case 'CHANGE_VISIBILITY':
            return changeVisibility(state, action);
        case 'EXPAND_ARTICLE':
            return changeVisibility({
                ...state,
                paragraphs: action.paragraphs
            });
        default:
            return state;
    }
};

const changeVisibility = (state) => {
    return {
        ...state,
        isCollapsed: !state.isCollapsed
    };
};

export default article;