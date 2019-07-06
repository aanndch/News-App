import React, { Component, Fragment } from 'react';

export default class ArticleCard extends Component {

    redirect = (url) => {
        window.location = url;
    }

    render() {
        return (
            <Fragment>
                <div className="article-card">
                        <div className="article-title">{this.props.title}</div>
                        <div className="article-desc">{this.props.desc}</div>
                        <div className="button-center">
                            {/* <button className="learn-more" onClick={this.handleShow}>Read More</button> */}
                            <button className="learn-more" onClick={() => this.redirect(this.props.url)}>Read More</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
