import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetails = () => {
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="avatar" height={50} width={50} src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Muthu
        </a>
        <div className="Metadate">
          <span className="date">Today at 5.00 PM</span>
        </div>
        <div className="text">Nice blog post!!</div>
      </div>
    </div>
  );
};

export default CommentDetails;
