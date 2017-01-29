import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true,
            paragraphs: []
        };

        this.handleArticleParagraphsView = this.handleArticleParagraphsView.bind(this);
    }

    static createQueryStringForArticle(id) {
        return `/article?id=${id}`;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.article._id != nextProps.article._id) {
            this.state = {
                isCollapsed: true,
                paragraphs: []
            };
        }
    }

    handleArticleParagraphsView() {
        if (this.state.paragraphs.length) {
            this.setState({
                isCollapsed: !this.state.isCollapsed
            });
            return;
        }
        this.fetchArticleParagraphs();
    }

    fetchArticleParagraphs() {
        fetch(Article.createQueryStringForArticle(this.props.article._id)).then((response) => {
            return response.json();
        }).then((paragraphs) => {
            this.setState({
                isCollapsed: !this.state.isCollapsed,
                paragraphs: paragraphs
            });
        })
    }

    render() {
        let articleBody = this.state.isCollapsed ? (
                <p>{this.props.article.text}</p>
            ) : (this.state.paragraphs.map((paragraph, index) => {
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
                <h2 onClick={this.handleArticleParagraphsView}>{this.props.article.title}</h2>
                <p>{this.props.article.author} {this.props.article.date} {this.props.article.time}</p>
                {articleBody}
                <button onClick={this.handleArticleParagraphsView}>
                    {this.state.isCollapsed ? "Развернуть" : "Свернуть" }
                </button>
            </div>
        );
    }
}