import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import Videos from "./components/Videos";
import axios from "axios";

// "api_key": "6b4fc32f-451c-43e7-ad20-e5ea94febd8a"

class Home extends React.Component {
  state = {
    sideVideos: [],
    mainVideo: [],
    comments: [],
    allVideos: []
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=6b4fc32f-451c-43e7-ad20-e5ea94febd8a"
      )
      .then(res => {
        const allVideos = res.data;

        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=6b4fc32f-451c-43e7-ad20-e5ea94febd8a"
          )
          .then(res => {
            let sideVideos = allVideos.filter(
              video => video.id !== "1af0jruup5gu"
            );
            const mainVideo = res.data;
            const comments = res.data.comments;
            this.setState({
              sideVideos,
              mainVideo: [mainVideo],
              comments,
              allVideos
            });
          });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=6b4fc32f-451c-43e7-ad20-e5ea94febd8a`
        )
        .then(res => {
          const mainVideo = res.data;
          const comments = res.data.comments;
          let sideVideos = this.state.allVideos.filter(
            video => video.id !== this.props.match.params.id
          );
          this.setState({ sideVideos, mainVideo: [mainVideo], comments });
        });
    }
  }

  render() {
    if (this.state.mainVideo.length === 0) {
      return <h1>join the navy</h1>;
    }
    return (
      <div>
        <Hero hero={this.state.mainVideo[0].image} />
        <div className="page__flex">
          <div>
            <About mainVideo={this.state.mainVideo} />
            <Comments />
            <div className="comment__container">
              <NewComments comments={this.state.comments} />
            </div>
          </div>
          <div className="page__videos">
            <Videos
              sideVideos={this.state.sideVideos}
              mainVideo={this.state.mainVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
