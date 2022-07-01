import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()} />
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
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
