import React from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
const API_KEY = "AIzaSyDfOFSF_WulLiDtjGIJgzOIztE0XNz3djk";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    youtubeApiSearch(
      {
        key: API_KEY,
        term: "Surfboards",
      },
      (videos) => {
        this.setState({ videos });
      }
    );
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App tab="home" />, document.querySelector("#root"));
