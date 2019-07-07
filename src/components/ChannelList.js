import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

export default class ChannelList extends Component {
  state = {
    loading: true,
    search: "",
    channels: null
  };

  async componentDidMount() {
    const apiKey = "297b81fe0c1b415f975e7b79dc820556";
    const url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const channels = data.sources.map(source => {
      return {
        name: source.name,
        id: source.id,
        description: source.description
      };
    });

    this.setState({
      loading: false,
      channels: channels
    });
  }

  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  clearSearch = () => {
    this.setState({ search: "" });
  };

  render() {
    let channelList = [];
    if (!this.state.loading) {
      let channels = this.state.channels.filter(channel => {
        return channel.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });

      channelList = channels.map(item => {
        return (
          <Link to={`/news/${item.id}`} key={item.id}>
            <li className="channel">
              <div className="channel-top">
                <i className="fa fa-align-justify" />
                <div className="channel-name">{item.name}</div>
              </div>
              <div className="channel-desc">{item.description}</div>
            </li>
          </Link>
        );
      });
    }

    return (
      <Fragment>
        <div id="heading">Daily News</div>
        <div id="channel-search">
          <input
            type="text"
            name="channelSearch"
            onChange={this.handleSearch}
            placeholder="Search"
            maxLength="30"
            id="channel-search-bar"
            value={this.state.search}
          />
          <i
            className="fa fa-times-circle"
            onClick={() => this.clearSearch()}
          />
        </div>
        <ul id="channel-list">
          {this.state.loading ? (
            <div id="center-loader">
              <div className="spinner">
                <div className="double-bounce1" />
                <div className="double-bounce2" />
              </div>
            </div>
          ) : (
            channelList
          )}
        </ul>
      </Fragment>
    );
  }
}
