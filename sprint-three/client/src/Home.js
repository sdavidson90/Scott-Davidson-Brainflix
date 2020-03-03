import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import Videos from "./components/Videos";
import axios from "axios";

class Home extends React.Component {
  // SETTING EMPTY STATE
  state = {
    sideVideos: [],
    mainVideo: [],
    comments: [],
    allVideos: []
  };
  //PULLING DATA OFF HEROKU
  componentDidMount() {
    axios.get("/api/video").then(res => {
      const allVideos = res.data;

      axios.get("/api/video/1af0jruup5gu").then(res => {
        let sideVideos = allVideos.filter(video => video.id !== "1af0jruup5gu");
        const mainVideo = res.data;
        const comments = mainVideo[0].comments;
        this.setState({
          sideVideos,
          mainVideo,
          comments,
          allVideos
        });
      });
    });
  }

  //SWITCHING VIDEOS
  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      axios.get(`/api/video/${this.props.match.params.id}`).then(res => {
        const mainVideo = res.data;
        const comments = res.data[0].comments;
        let sideVideos = this.state.allVideos.filter(
          video => video.id !== this.props.match.params.id
        );
        this.setState({ sideVideos, mainVideo, comments });
      });
    }
  }

  //HTML RENDER/RETURN
  render() {
    if (this.state.mainVideo.length === 0) {
      return <div></div>;
    }
    return (
      <div>
        <Hero hero={this.state.mainVideo[0].image} />
        <div className="page__flex">
          <div>
            <About mainVideo={this.state.mainVideo} />
            <Comments comments={this.state.comments} />
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
