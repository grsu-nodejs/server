import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchArticles} from "../actions/articles";
import DatePickerWrapper from "../components/DatePickerWrapper";

const mapStateToProps = (state) => {
    return {
        date: state.date
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (date) => {
            dispatch(fetchArticles(date));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatePickerWrapper);