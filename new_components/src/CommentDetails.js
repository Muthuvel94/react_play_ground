import React from "react";

const CommentDetails = (props) => {
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="avatar" height={50} width={50} src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="Metadate">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
