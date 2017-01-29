import React, {Component} from "react";
import {connect} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {changeDate} from "../actions/index";

function mapStateToProps(state) {
    return {
        date: state.date
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (date) => {
            dispatch(changeDate(date))
        }
    }
};

class DatePickerWrapper extends Component {
    render() {
        const {date, onChange} = this.props;
        return (
            <DatePicker selected={date} onChange={onChange}/>
        );
    }
}

export const CustomDatePicker = connect(
    mapStateToProps,
    mapDispatchToProps
)(DatePickerWrapper);

export default CustomDatePicker;