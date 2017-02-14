import React, {Component} from "react";
import {render} from "react-dom";
import Articles from "../containers/Articles";
import DatePicker from "../containers/DatePicker";
import "../../assets/css/style.less";

export default class App extends Component {
    render() {
        return (
            <div>
                <DatePicker/>
                <Articles/>
            </div>
        );
    }
}