import React, { Component } from 'react';

export default class ChannelNews extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            search: '',
            articles: []
        }
    }

    async componentDidMount() {
        // const id = this.props.match.params.id;
        // const apiKey = "297b81fe0c1b415f975e7b79dc820556";
        // const url = `https://newsapi.org/v2/everything?sources=${id}&apiKey=${apiKey}`;
        // const response = await fetch(url);
        // const data = await response.json();

        const data = 
            {
                "status": "ok",
                "totalResults": 6621,
                "articles": 
                [{
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Markets Right Now: Stocks slip as hopes dim for a rate cut",
                    "description": "Stocks are slipping and bond yields are rising after the government issued a surprisingly strong jobs report for June, complicating the Federal Reserve's decision later this month on whether to lower interest rates.",
                    "url": "https://abcnews.go.com/Business/wireStory/markets-now-stocks-slip-hopes-dim-rate-cut-64148335",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:44:09Z",
                    "content": "The latest on developments in financial markets (all times local):\r\n9:35 a.m.\r\nStocks are slipping and bond yields are rising after the government issued a surprisingly strong jobs report for June, complicating the Federal Reserve's decision later this month … [+568 chars]"
                    },
                    {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Coast Guard searching for man who fell from Carnival ship",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/US/wireStory/coast-guard-searching-man-fell-carnival-ship-64148134",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:28:11Z",
                    "content": "The U.S. Coast Guard is searching for a 37-year-old man who apparently fell overboard from the cruise ship Carnival Victory.\r\nThe agency says it was notified Thursday that a Carnival cruise ship crewmember fell overboard about 30 miles (48 kilometers) northwe… [+148 chars]"
                    },
                    {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "UN envoy for Syria visits Moscow for talks",
                    "description": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution",
                    "url": "https://abcnews.go.com/International/wireStory/envoy-syria-visits-moscow-talks-64148076",
                    "urlToImage": "https://s.abcnews.com/images/International/WireAP_ae062147cb6945769a977147e693e0ac_16x9_992.jpg",
                    "publishedAt": "2019-07-05T13:26:17Z",
                    "content": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution.\r\nDuring talks Friday with Russian Foreign Minister Sergey Lavrov, Pedersen voi… [+603 chars]"
                },
                {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Coast Guard searching for man who fell from Carnival ship",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/US/wireStory/coast-guard-searching-man-fell-carnival-ship-64148134",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:28:11Z",
                    "content": "The U.S. Coast Guard is searching for a 37-year-old man who apparently fell overboard from the cruise ship Carnival Victory.\r\nThe agency says it was notified Thursday that a Carnival cruise ship crewmember fell overboard about 30 miles (48 kilometers) northwe… [+148 chars]"
                    },
                    {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "UN envoy for Syria visits Moscow for talks",
                    "description": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution",
                    "url": "https://abcnews.go.com/International/wireStory/envoy-syria-visits-moscow-talks-64148076",
                    "urlToImage": "https://s.abcnews.com/images/International/WireAP_ae062147cb6945769a977147e693e0ac_16x9_992.jpg",
                    "publishedAt": "2019-07-05T13:26:17Z",
                    "content": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution.\r\nDuring talks Friday with Russian Foreign Minister Sergey Lavrov, Pedersen voi… [+603 chars]"
                },
                {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Coast Guard searching for man who fell from Carnival ship",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/US/wireStory/coast-guard-searching-man-fell-carnival-ship-64148134",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:28:11Z",
                    "content": "The U.S. Coast Guard is searching for a 37-year-old man who apparently fell overboard from the cruise ship Carnival Victory.\r\nThe agency says it was notified Thursday that a Carnival cruise ship crewmember fell overboard about 30 miles (48 kilometers) northwe… [+148 chars]"
                    },
                    {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "UN envoy for Syria visits Moscow for talks",
                    "description": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution",
                    "url": "https://abcnews.go.com/International/wireStory/envoy-syria-visits-moscow-talks-64148076",
                    "urlToImage": "https://s.abcnews.com/images/International/WireAP_ae062147cb6945769a977147e693e0ac_16x9_992.jpg",
                    "publishedAt": "2019-07-05T13:26:17Z",
                    "content": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution.\r\nDuring talks Friday with Russian Foreign Minister Sergey Lavrov, Pedersen voi… [+603 chars]"
                },
                {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Coast Guard searching for man who fell from Carnival ship",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/US/wireStory/coast-guard-searching-man-fell-carnival-ship-64148134",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:28:11Z",
                    "content": "The U.S. Coast Guard is searching for a 37-year-old man who apparently fell overboard from the cruise ship Carnival Victory.\r\nThe agency says it was notified Thursday that a Carnival cruise ship crewmember fell overboard about 30 miles (48 kilometers) northwe… [+148 chars]"
                    },
                    {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "UN envoy for Syria visits Moscow for talks",
                    "description": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution",
                    "url": "https://abcnews.go.com/International/wireStory/envoy-syria-visits-moscow-talks-64148076",
                    "urlToImage": "https://s.abcnews.com/images/International/WireAP_ae062147cb6945769a977147e693e0ac_16x9_992.jpg",
                    "publishedAt": "2019-07-05T13:26:17Z",
                    "content": "The U.N.'s special envoy for Syria, Geir Pedersen, is focusing his efforts on hostilities in the northwestern province of Idlib and attempts to draft the nation's new constitution.\r\nDuring talks Friday with Russian Foreign Minister Sergey Lavrov, Pedersen voi… [+603 chars]"
                }]
            };

        const articles = data.articles.map(article => {
            return {title: article.title, description: article.description };
        })

        this.setState({loading: false, articles: articles});

    }

    handleSearch = (event) => {
        this.setState({ search: event.target.value});
    }

    render() {

        let articles = [];
        articles = this.state.articles.filter(article => {
            return article.title.toLowerCase().includes(this.state.search.toLowerCase());
        })

        if (this.state.loading) {
            articles = <div>Loading GIF</div>
        } else {
            articles = articles.map((article, i) => {
                return (<div key={i} className="article-card">
                            <div className="article-title">{article.title}</div>
                            <div className="article-desc">{article.description}</div>
                        </div>);
            })
        }

        return (
            <div>
                <div id="article-search">
                    <input type='text' name='articleSearch' onChange={this.handleSearch} placeholder='Search' maxLength='30' id="search-bar"/>
                    {/* <div>Search Icon</div>  */}
                </div>
                <div className="container">
                    {articles}
                </div>
            </div>
        )
    }
}
