import React, {Component} from "react";
import {render} from "react-dom";
import Article from "./Article";

export default class Articles extends Component {
    constructor(props) {
        super(props);

        const {loadArticles, date} = this.props;
        loadArticles(date);
    }

    render() {
        const {articles, expandArticle} = this.props;

        return (
            <div>
                <ul>
                    {articles.map((article) => {
                        return (
                            <li className="article" key={article._id}>
                                <Article article={article} expandArticle={expandArticle}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}