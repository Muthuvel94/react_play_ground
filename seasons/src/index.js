import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // This IS THE ONLY TIME we do direct assigment
    // to this.state
    this.state = { lat: null, errormessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errormessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errormessage && !this.state.lat) {
      return <div> Error: {this.state.errormessage} </div>;
    }
    if (!this.state.errormessage && this.state.lat) {
      return <div> Latitude: {this.state.lat} </div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
