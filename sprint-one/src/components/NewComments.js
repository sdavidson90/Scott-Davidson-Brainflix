import React from "react";

const NewComments = ({ test }) => {
  const testTwo = test.map((object, index) => {
    return (
      <div className="comments__new">
        <div className="comments__new-image"></div>
        <div className="comments__container">
          <h2 className="comments__new-name"></h2>
          <aside className="comments__new-time"></aside>
          <p className="comments__new-comment">{object.comment}</p>
        </div>
      </div>
    );
  });
  return testTwo;
};

export default NewComments;
