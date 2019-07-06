import React, { Component, Fragment } from 'react';

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
                "articles": [
                    {
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
                    "title": "Some Kenyan families reject Boeing's compensation for crash",
                    "description": "Fifteen Kenyan families of people killed in a plane crash in Ethiopia in March have rejected a proposal by Boeing to compensate them, saying they will pursue their claims in court",
                    "url": "https://abcnews.go.com/International/wireStory/kenyan-families-reject-boeings-compensation-crash-64147948",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:23:11Z",
                    "content": "Fifteen Kenyan families of people killed in a plane crash in Ethiopia in March have rejected a proposal by Boeing to compensate them, saying they will pursue their claims in court.\r\n\"So far our clients have rejected negotiations outside court,\" Lawyer Irungu … [+508 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Greek authorities seize massive shipment of Captagon drug",
                    "description": "Greek authorities say they have seized more than five tons of the synthetic drug known as Captagon, which they say is the largest amount of the drug ever seized globally",
                    "url": "https://abcnews.go.com/International/wireStory/greek-authorities-seize-massive-shipment-captagon-drug-64147855",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:18:11Z",
                    "content": "Greek authorities say they have seized more than five tons of the synthetic drug known as Captagon, which they say is the largest amount of the drug ever seized globally.\r\nGreece's financial crimes squad said Friday the drug, which is popular in the Arab worl… [+478 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Kevin Spacey accuser drops lawsuit against actor",
                    "description": "A young man who says Kevin Spacey groped him in a Nantucket bar in 2016 has dropped his lawsuit against the Oscar-winning actor",
                    "url": "https://abcnews.go.com/Entertainment/wireStory/kevin-spacey-accuser-drops-lawsuit-actor-64147696",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:08:59Z",
                    "content": "A young man who says Kevin Spacey groped him in a Nantucket bar in 2016 has dropped his lawsuit against the Oscar-winning actor.\r\nInterested in Kevin Spacey?\r\nAdd Kevin Spacey as an interest to stay up to date on the latest Kevin Spacey news, video, and analy… [+678 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Russian official arrested on high treason charges",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/International/wireStory/russian-official-arrested-high-treason-charges-64147692",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:06:41Z",
                    "content": "An aide to the presidential envoy to Russia's Urals region has been arrested on charges of high treason, in the first publicly known case of a government official being arrested on suspicions of treason in post-Soviet Russia.\r\nThe aide, Alexander Vorobyov, to… [+522 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Boy who fell into Indiana drain rescued during fireworks",
                    "description": "Police say a young boy watching fireworks in Indiana was rescued after failing more than 20 feet into a water-filled drain pipe",
                    "url": "https://abcnews.go.com/US/wireStory/boy-fell-indiana-drain-rescued-fireworks-64147690",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T13:05:26Z",
                    "content": "Authorities say a young boy watching fireworks in Indiana was rescued after failing more than 20 feet (6 meters) into a water-filled drain pipe.\r\nA crowd watched as rescuers in Evansville lowered a swing-set seat into the pipe and pulled him up Thursday night… [+375 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Police break up huge 'modern day slavery' ring in UK",
                    "description": "Details about what prosecutors have called one of Britain's largest-ever modern day slavery rings have emerged with the convictions of eight people",
                    "url": "https://abcnews.go.com/International/wireStory/police-break-huge-modern-day-slavery-ring-uk-64147402",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T12:42:11Z",
                    "content": "Details about what prosecutors have called one of Britain's largest-ever modern day slavery rings have emerged with the convictions of eight people.\r\nProsecutors say more than 400 victims were forced to work for minuscule wages while their masters earned some… [+523 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "The Latest: US adds robust 224,000 jobs in June",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/Business/wireStory/latest-us-adds-robust-224000-jobs-june-64147354",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T12:39:11Z",
                    "content": "The Latest on the U.S. jobs report for June (all times local):\r\n8:30 a.m.\r\nU.S. job growth rebounded in June as employers added 224,000 jobs, an indication of the economy's durability after more than a decade of expansion.\r\nThe Labor Department says the solid… [+1414 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "3 police officers pay for accused shoplifter's groceries",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/US/wireStory/police-officers-pay-accused-shoplifters-groceries-64147173",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T12:34:11Z",
                    "content": "A trio of police officers paid for an accused shoplifter's groceries rather than arresting her at a New York City Whole Foods.\r\nShopper Paul Bozymowski tweeted that the woman was being held by store security at the Union Square Whole Foods on Thursday after s… [+393 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Man with knife stabs 3 people inside Virginia plasma center",
                    "description": "A police dispatcher in Virginia said a man with a long knife stabbed three people inside a plasma donation center as nurses and patients hid inside a bathroom",
                    "url": "https://abcnews.go.com/US/wireStory/man-knife-stabs-people-inside-virginia-plasma-center-64147172",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T12:32:54Z",
                    "content": "A police dispatcher in Virginia said a man with a long knife stabbed three people inside a plasma donation center as nurses and patients hid inside a bathroom.\r\nThe dispatcher warned officers that witnesses said the man was attacking people with a machete Thu… [+504 chars]"
                    },
                    {
                    "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "US employers added robust 224,000 jobs in June, with unemployment rate rising slightly to 3.7%",
                    "description": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "url": "https://abcnews.go.com/Business/wireStory/us-employers-added-robust-224000-jobs-june-unemployment-64147124",
                    "urlToImage": null,
                    "publishedAt": "2019-07-05T12:30:39Z",
                    "content": "US employers added robust 224,000 jobs in June, with unemployment rate rising slightly to 3.7%."
                    }]
            };

        const articles = data.articles.map(article => {
            return {title: article.title, description: article.description };
        })

        this.setState({
            loading: false,
            articles: articles
        });

    }

    handleSearch = (event) => {
        this.setState({ search: event.target.value});
    }

    clearSearch = () => {
        this.setState({ search: '' });
        document.getElementById("search-bar").value = '';
    }

    render() {

        let articles = [];
        articles = this.state.articles.filter(article => {
            return article.title.toLowerCase().includes(this.state.search.toLowerCase());
        })

        articles = articles.map((article, i) => {
            return (<div key={i} className="article-card">
                        <div className="article-title">{article.title}</div>
                        <div className="article-desc">{article.description}</div>
                    </div>);
        })

        return (
            <Fragment>
                <div id="heading">Articles</div>
                <div id="article-search">
                    <input type='text' name='articleSearch' onChange={this.handleSearch} placeholder="Search" maxLength='30' id="search-bar"/>
                    <i className="fa fa-times-circle" onClick={() => this.clearSearch()}></i>
                </div>
                <div className="container">
                    {this.state.loading ? <div id="center-loader"><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div> : articles}
                </div>
            </Fragment>
        )
    }
}
