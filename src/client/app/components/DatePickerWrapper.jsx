import React, {Component} from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default class DatePickerWrapper extends Component {
    render() {
        const {date, onChange} = this.props;
        return (
            <DatePicker selected={date} onChange={onChange}/>
        );
    }
}