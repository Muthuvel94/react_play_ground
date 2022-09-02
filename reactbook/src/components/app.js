import React, { Component } from "react";
import { bookList } from "../containers/book-list";
export default class App extends Component {
  render() {
    return (
      <div>
        <bookList />
      </div>
    );
  }
}
