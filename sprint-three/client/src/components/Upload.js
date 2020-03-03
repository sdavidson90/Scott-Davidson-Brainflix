import React, { Component } from "react";
import thumbnail from "../assets/Images/Upload-video-preview.jpg";
import axios from "axios";

class Upload extends Component {
  state = {
    videos: []
  };
  componentDidMount() {
    axios.get("/api/video").then(res => {
      this.setState({
        videos: res.data
      });
    });
  }
  //POSTING NEW VIDEOS
  handleFormSubmit = event => {
    axios
      .post("/api/video", {
        title: event.target.title.value,
        description: event.target.description.value,
        image: "https://i.imgur.com/CyD0XmE.jpg"
      })
      .then(res => {
        this.setState({
          videos: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    event.target.reset();
  };

  render() {
    if (!this.state.videos) {
      return <p>Loading</p>;
    }

    return (
      <div className="upload">
        <div className="upload__margin">
          <h1 className="upload__title">Upload Video</h1>
          <form className="upload__flex" onSubmit={this.handleFormSubmit}>
            <div>
              <h4 className="upload__description">VIDEO THUMBNAIL</h4>
              <img className="upload__image" src={thumbnail} alt="thumbnail" />
            </div>
            <div className="upload__flex-two">
              <p className="upload__description">TITLE YOUR VIDEO</p>
              <input
                className="upload__form-title"
                name="title"
                placeholder="Add a title to your video"
                autoComplete="off"
              />
              <p className="upload__description">ADD A VIDEO DESCRIPTION</p>
              <textarea
                className="upload__form-description"
                name="description"
                rows="10"
                cols="50"
                placeholder="Add a description of your video"
              ></textarea>
            </div>
            <div className="upload__button-container">
              <button className="upload__button-publish">PUBLISH</button>
              <button className="upload__button-cancel">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
