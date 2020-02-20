import React from "react";
import "./styles/main.css";
import Home from "./Home";
import Upload from "./components/Upload";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/video/" component={Home} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  );
};

export default App;

//REMEMBER TO WORRY ABOUT THE SCROLL BAR AFFECTING THE ST00PID NAV BAR!!!
//MAKE IT SO MOBILE VIEW DOTS OUT SOME OF THE TITLE TO FIT
//UUID
//POST COMMENTS
//TIME STAMP CONVERTER
