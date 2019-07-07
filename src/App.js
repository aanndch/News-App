import React from "react";
import "./App.css";
import ChannelList from "./components/ChannelList";
import ChannelNews from "./components/ChannelNews";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ChannelList} />
          <Route path="/news/:id" component={ChannelNews} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
