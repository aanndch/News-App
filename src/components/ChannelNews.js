import React, { Component, Fragment } from "react";
import ArticleCard from "./ArticleCard";

export default class ChannelNews extends Component {
  state = {
    loading: true,
    search: "",
    articles: []
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const apiKey = "297b81fe0c1b415f975e7b79dc820556";
    const url = `https://newsapi.org/v2/everything?sources=${id}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const articles = data.articles.map(article => {
      return {
        title: article.title,
        description: article.description,
        url: article.url,
        content: article.content
      };
    });

    this.setState({
      loading: false,
      articles: articles
    });
  }

  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  clearSearch = () => {
    this.setState({ search: "" });
  };

  render() {
    let filteredArticles = this.state.articles.filter(article => {
      return article.title
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    filteredArticles = filteredArticles.map((article, i) => {
      return (
        <ArticleCard
          title={article.title}
          desc={article.description}
          url={article.url}
          content={article.content}
          key={i}
        />
      );
    });

    return (
      <Fragment>
        <div id="heading">Articles</div>
        <div id="article-search">
          <input
            type="text"
            name="articleSearch"
            onChange={this.handleSearch}
            placeholder="Search"
            maxLength="30"
            id="article-search-bar"
            value={this.state.search}
          />
          <i
            className="fa fa-times-circle"
            onClick={() => this.clearSearch()}
          />
        </div>
        <div className="contentContainer">
          {this.state.loading ? (
            <div id="center-loader">
              <div className="spinner">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
              </div>
            </div>
          ) : (
            filteredArticles
          )}
        </div>
      </Fragment>
    );
  }
}
