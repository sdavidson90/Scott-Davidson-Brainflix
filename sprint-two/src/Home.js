import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import Videos from "./components/Videos";
import axios from "axios";

// "api_key": "6b4fc32f-451c-43e7-ad20-e5ea94febd8a"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideVideos: [],
      mainVideo: [],
      comments: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=6b4fc32f-451c-43e7-ad20-e5ea94febd8a"
      )
      .then(response => {
        const sideVideos = response.data;
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/1aivjruutn6a?api_key=6b4fc32f-451c-43e7-ad20-e5ea94febd8a"
          )
          .then(response => {
            const mainVideo = response.data;
            const comments = response.data.comments;
            this.setState({
              sideVideos,
              mainVideo: [mainVideo],
              comments
            });
          });
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.mainVideo.id !== this.state.sideVideos.id) {
  //     console.log("jsndufudd");
  //   } else {
  //     console.log("hahahah");
  //   }
  // }

  render(props) {
    console.log(this.props);
    return (
      <div>
        <Hero />
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
