import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "643369904337-qds74epdtn6ugmdnnbib5f1ds9hdn50s.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "streamy",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
