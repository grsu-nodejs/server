import React, {Component} from "react";
import {render} from "react-dom";
import Articles from "../containers/Articles";
import DatePicker from "../containers/DatePicker";
import LoadingBar from 'react-redux-loading-bar'

import "../../assets/css/style.less";

export default class App extends Component {
    render() {
        return (
            <div>
                <LoadingBar className="loading-bar" />
                <DatePicker/>
                <Articles/>
            </div>
        );
    }
}