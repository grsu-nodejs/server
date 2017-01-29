import React, {Component} from 'react';
import {render} from 'react-dom';
import Article from './components/Article';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../assets/css/style.less';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            date: moment(),
        };
        this.fetchArticles(this.state.date);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    static createQueryStringForDay(date) {
        return date.format('[/day?year=]YYYY[&month=]MM[&day=]DD');
    }

    fetchArticles(date) {
        fetch(App.createQueryStringForDay(date)).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                articles: data
            });
        });
    }

    handleDateChange(date) {
        this.setState({
            date: date
        });
        this.fetchArticles(date);
    }

    render() {
        return (
            <div>
                <DatePicker selected={this.state.date} onChange={this.handleDateChange}/>
                <ul>
                    {this.state.articles.map((article, index) => {
                        return (
                            <li className="article" key={index}>
                                <Article article={article}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

render(
    <App/>,
    document.getElementById('app')
);