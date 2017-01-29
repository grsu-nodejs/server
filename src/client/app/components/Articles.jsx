import React, {Component} from "react";
import {render} from "react-dom";
import Article from "./Article";

export default class Articles extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.articles.map((article) => {
                        return (
                            <li className="article" key={article._id}>
                                <Article article={article} expandArticle={this.props.expandArticle}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}