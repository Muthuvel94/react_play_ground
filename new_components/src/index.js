import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Amose" date="Today at 2 PM" text="Great work" />
      <CommentDetails author="Muthu" date="Today at 1 PM" text="Almight" />
      <CommentDetails author="Packs" date="Today at 4 PM" text="Good Work!!!" />
      <CommentDetails author="Seelan" date="Today at 8 PM" text="Nice Job!!" />
      <CommentDetails author="CD" date="Today at A PM" text="Best one!!" />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
