const article = (state, action) => {
    if (state._id != action.id) {
        return state;
    }

    switch (action.type) {
        case 'TRIGGER_SPOILER':
            return triggerSpoiler(state, action);
        case 'EXPAND_ARTICLE':
            return triggerSpoiler({
                ...state,
                paragraphs: action.paragraphs
            });
        default:
            return state;
    }
};

const triggerSpoiler = (state) => {
    return {
        ...state,
        isCollapsed: !state.isCollapsed
    };
};

export default article;