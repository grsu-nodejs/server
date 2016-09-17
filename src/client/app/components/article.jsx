import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true,
            paragraphs: []
        };
    }

    render() {
        return (
            <div>
                <h2>{this.props.article.title}</h2>
                <p>{this.props.article.author} {this.props.article.date} {this.props.article.time}</p>
                { this.state.isCollapsed ?
                    <p>{this.props.article.text}</p>
                    :
                    this.state.paragraphs.map((paragraph, index) => {
                        return (
                            <div key={index}>
                                {paragraph.imgsrc ?
                                    <img src={paragraph.imgsrc}/>
                                    :
                                    <p>{paragraph.text}</p>
                                }
                            </div>
                        );
                    })
                }
                <button onClick={this.fetchArticle.bind(this)}>
                    {this.state.isCollapsed ? "Развернуть" : "Свернуть" }
                </button>
            </div>
        );
    }

    fetchArticle() {
        fetch(Article.createQueryStringForArticle(this.props.article._id))
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({isCollapsed: !this.state.isCollapsed, paragraphs: data});
            })
    }

    static createQueryStringForArticle(id) {
        return `/article?id=${id}&`;
    }
}