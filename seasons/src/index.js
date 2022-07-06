import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // This IS THE ONLY TIME we do direct assigment
  // to this.state
  state = { lat: null, errormessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errormessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errormessage && !this.state.lat) {
      return <div> Error: {this.state.errormessage} </div>;
    }
    if (!this.state.errormessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="please accept location request" />;
  }

  render() {
    return <div classame="border red">{this.renderContent()}</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
