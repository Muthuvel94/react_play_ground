import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
const App = () => {
  return (
    <div className="ui container comments">
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
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar" height={50} width={50} src={faker.image.image()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Amose
          </a>
          <div className="Metadate">
            <span className="date">Today at 6.15 PM</span>
          </div>
          <div className="text">Nice blog!!!</div>
        </div>
      </div>
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar" height={50} width={50} src={faker.image.image()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Packs
          </a>
          <div className="Metadate">
            <span className="date">Today at 5.15 PM</span>
          </div>
          <div className="text">Keep going!!!</div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
