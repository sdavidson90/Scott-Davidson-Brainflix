import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import Videos from "./components/Videos";
import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="page__flex">
        <div>
          <About />
          <Comments />
          <NewComments />
        </div>
        <div>
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default App;
