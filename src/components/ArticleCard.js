import React, { Component, Fragment } from "react";
import ArticleModal from "./ArticleModal";

export default class ArticleCard extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  redirect = url => {
    window.location = url;
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
        {this.state.show && (
          <ArticleModal
            title={this.props.title}
            content={this.props.content}
            url={this.props.url}
            handleHide={this.handleHide}
          />
        )}
        <div className="article-card">
          <div className="article-title">{this.props.title}</div>
          <div className="article-desc">{this.props.desc}</div>
          <div className="button-center">
            <button className="learn-more" onClick={this.handleShow}>
              Read More
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
