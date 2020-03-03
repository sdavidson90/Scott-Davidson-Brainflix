import React from "react";

const Comments = props => {
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
                type="submit"
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
