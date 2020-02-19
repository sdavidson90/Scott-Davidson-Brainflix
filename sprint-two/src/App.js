import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    sideVideos: [],
    mainVideo: []
  };
  componentDidMount() {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=1")
      .then(response => {
        const sideVideos = response.data;
        console.log(sideVideos);
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1ainjruutd1j?api_key=1`
          )
          .then(response => {
            const mainVideo = response.data;
            console.log(mainVideo);
            this.setState({ mainVideo, sideVideos });
          });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <div className="page__flex">
          <div>
            <About mainVideo={this.state.mainVideo} />
            <Comments />
            <div className="comment__container">
              {/* <NewComments newComments={this.state.mainVideo.comments} /> */}
            </div>
          </div>
          <div className="page__videos">
            <Videos sideVideos={this.state.sideVideos} />
          </div>
          <Upload />
        </div>
      </div>
    );
  }
}

export default App;
