import React, {Component} from 'react';
import {render} from 'react-dom';
import '../assets/css/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.getData();
    }

    render() {
        return (
            <ul>
                {this.state.articles.map((article) => {
                    return (
                        <li>
                            <h2>{article.title}</h2>
                            <p>{article.auhtor} {article.date} {article.time}</p>
                            <p>{article.text}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }

    getData() {
        console.log("exec");
        fetch('/day?year=2016&month=07&day=15')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({articles: data});
            })
    }
}

render(
    <App/>,
    document.getElementById('app')
);

