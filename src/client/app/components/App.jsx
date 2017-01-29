import React, {Component} from "react";
import {render} from "react-dom";
import VisibleArticles from "../containers/VisibleArticles";
import CustomDatePicker from "../containers/CustomDatePicker";
import "../../assets/css/style.less";

export default class App extends Component {
    render() {
        return (
            <div>
                <CustomDatePicker/>
                <VisibleArticles/>
            </div>
        );
    }
}