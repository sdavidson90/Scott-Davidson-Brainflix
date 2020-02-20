import React from "react";

const NewComments = ({ comments }) => {
  const newArr = comments.map((object, index) => {
    return (
      <div key={index} className="comments__new">
        <div className="comments__new-image"></div>
        <div className="comments__container">
          <h2 className="comments__new-name">{object.name}</h2>
          <aside className="comments__new-time">{object.timestamp}</aside>
          <p className="comments__new-comment">{object.comment}</p>
        </div>
      </div>
    );
  });
  return newArr;
};

export default NewComments;
