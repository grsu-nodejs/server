import React, {Component} from 'react';
import {render} from 'react-dom';
import Article from './components/article';
import '../assets/css/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.fetchData();
    }

    render() {
        return (
            <ul>
                {this.state.articles.map((article, index) => {
                    return (
                        <li key={index}>
                            <Article article={article}/>
                        </li>
                    );
                })}
            </ul>
        );
    }

    fetchData() {
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

