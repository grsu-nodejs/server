import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class DatePickerWrapper extends Component {
    render() {
        const {date, onChange} = this.props;

        return (
            <DatePicker
                className="header__date-picker"
                selected={date}
                onChange={onChange}
                maxDate={moment()}
            />
        );
    }
}

DatePickerWrapper.propTypes = {
    date: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
};