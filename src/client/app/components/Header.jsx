import React, {Component} from "react";
import {render} from "react-dom";
import DatePicker from "../containers/DatePicker";
import LoadingBar from "react-redux-loading-bar";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <LoadingBar className="header__loading-bar header__loading-bar_green"/>
                <DatePicker/>
            </div>
        );
    }
}