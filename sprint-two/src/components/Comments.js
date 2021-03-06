import React from "react";
import axios from "axios";

const Comments = props => {
  click = () => {
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=6b4fc32f-451c-43e7-ad20-e5ea94febd8a`,
        comment
      )
      .then(res => {
        console.log(res.data);
      });
  };

  return (
    <div className="comments">
      <h1 className="comments__title">{props.comments.length} Comments</h1>
      <div className="comments__input">
        <div className="comments__input-photo"></div>
        <div className="comments__input-info">
          <form className="comments__input-info-form">
            <div className="comments__input-text">
              <p>JOIN THE CONVERSATION</p>
              <textarea
                className="comments__input-info-form-comment"
                name="comment"
                rows="10"
                cols="50"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="comments__input-button">
              <button
                className="comments__input-info-form-submit"
                onClick={this.click}
              >
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="comments__section"></div>
    </div>
  );
};

export default Comments;
