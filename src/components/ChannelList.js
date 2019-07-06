import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default class ChannelList extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            // search: '',
            channels: null
        };
    }

    async componentDidMount() {
        // const apiKey = "297b81fe0c1b415f975e7b79dc820556";
        // const url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
        // const response = await fetch(url);
        // const data = await response.json();

        const data = 
        {
            "status": "ok",
            "sources": [
                            {
                            "id": "abc-news",
                            "name": "ABC News",
                            "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
                            "url": "https://abcnews.go.com",
                            "category": "general",
                            "language": "en",
                            "country": "us"
                            },
                            {
                            "id": "abc-news-au",
                            "name": "ABC News (AU)",
                            "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
                            "url": "http://www.abc.net.au/news",
                            "category": "general",
                            "language": "en",
                            "country": "au"
                            },
                            {
                            "id": "aftenposten",
                            "name": "Aftenposten",
                            "description": "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
                            "url": "https://www.aftenposten.no",
                            "category": "general",
                            "language": "no",
                            "country": "no"
                            },
                        ]
        };

        const channels = data.sources.map(source => {
            return {name: source.name, id: source.id, description: source.description};
        })
        this.setState({
            loading: false,
            channels: channels
        });
    }

    render() {

        let channelList;
        if (this.state.loading) {
            channelList = <div>Loading GIF</div>;
        } else {
            channelList = this.state.channels.map(item => {
                return (<Link to={`/news/${item.id}`} key={item.id}>
                            <li className="channel">
                                <div className="channel-top">
                                    <i className="fa fa-align-justify"></i>
                                    <div className="channel-name">{item.name}</div>
                                </div>
                                <div className="channel-desc">{item.description}</div>
                            </li>
                        </Link>);
            })
        }

        return (
            <Fragment>
                <div id="heading">Daily News</div>
                {/* <div>
                    <input type='text' name='channelSearch' placeholder='Times Now' maxLength='30'></input>
                    <div>Search Icon</div> 
                </div> */}
                <ul id="channel-list">
                    {channelList}
                </ul>
            </Fragment>
        )
    }

}
