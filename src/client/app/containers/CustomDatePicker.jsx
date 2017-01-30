import React, {Component} from "react";
import {connect} from "react-redux";
import {changeDate, loadArticles} from "../actions/index";
import DatePickerWrapper from "../components/DatePickerWrapper";

const mapStateToProps = (state) => {
    return {
        date: state.date
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (date) => {
            dispatch(changeDate(date));
            dispatch(loadArticles(date));
        }
    }
};

const CustomDatePicker = connect(
    mapStateToProps,
    mapDispatchToProps
)(DatePickerWrapper);

export default CustomDatePicker;