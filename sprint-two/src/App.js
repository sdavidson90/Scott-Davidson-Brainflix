import React, { Component } from "react";
import "./styles/main.css";
import Home from "./Home";
import Upload from "./components/Upload";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/video/:id"
            render={props => {
              return <Home {...props} />;
            }}
          />
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}

//REMEMBER TO WORRY ABOUT THE SCROLL BAR AFFECTING THE ST00PID NAV BAR!!!
//UUID
//POST COMMENTS
