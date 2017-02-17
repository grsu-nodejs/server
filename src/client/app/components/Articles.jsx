import React, {Component} from "react";
import {render} from "react-dom";
import Article from "../containers/Article";

export default class Articles extends Component {
    constructor(props) {
        super(props);

        const {loadArticles, date} = this.props;
        loadArticles(date);
    }

    render() {
        const {articles} = this.props;

        return (
            <div className="articles-list">
                <ul>
                    {articles.map((article) => {
                        return (
                            <li className="article" key={article._id}>
                                <Article article={article}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Articles.propTypes = {
    date: React.PropTypes.object.isRequired,
    loadArticles: React.PropTypes.func.isRequired,
};