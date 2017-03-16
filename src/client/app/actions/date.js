import * as constants from '../constants/constants';

export const changeDate = (date) => {
    return {
        type: constants.CHANGE_DATE,
        date: date
    };
};