import * as constants from "../constants/constants";

const article = (state, action) => {
    if (state._id != action.id) {
        return state;
    }

    switch (action.type) {
        case constants.TRIGGER_SPOILER:
            return triggerSpoiler(state, action);
        case constants.EXPAND_ARTICLE:
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