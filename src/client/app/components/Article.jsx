import React, {Component} from "react";
import {render} from "react-dom";

export default class Article extends Component {
    render() {
        const {article, expandArticle} =  this.props;

        let articleBody = article.isCollapsed ? (
                <p>{article.text}</p>
            ) : (article.paragraphs.map((paragraph, index) => {
                return (
                    <div key={index}>
                        {paragraph.imgsrc ?
                            <img src={paragraph.imgsrc}/>
                            :
                            <p>{paragraph.text}</p>
                        }
                    </div>
                );
            }));

        return (
            <div>
                <h2 onClick={() => expandArticle(article._id, article.paragraphs)}>{article.title}</h2>
                <p>{article.author} {article.date} {article.time}</p>
                {articleBody}
                <button onClick={() => expandArticle(article._id, article.paragraphs)}>
                    {article.isCollapsed ? "Развернуть" : "Свернуть"}
                </button>
            </div>
        );
    }
}