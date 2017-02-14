import moment from "moment";
import * as constants from "../constants/constants";

const date = (state = moment(), action) => {
    switch (action.type) {
        case constants.CHANGE_DATE:
            return action.date;
        default:
            return state;
    }
};

export default date;