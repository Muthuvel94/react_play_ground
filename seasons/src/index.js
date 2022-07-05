import React from "react";
import ReactDOM from "react-dom/client";

import SeasonDisplay from "./SeasonDisplay";

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

  render() {
    if (this.state.errormessage && !this.state.lat) {
      return <div> Error: {this.state.errormessage} </div>;
    }
    if (!this.state.errormessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading!</div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
