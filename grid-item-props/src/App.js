import React from 'react';
import '../src/App.css';

class App extends React.Component {
  render() {
    return (
      <div id='body'>
        <div id='grid-container'>
          <div id='header'>Header</div>
          <div id='sidebar'>Sidebar</div>
          <div id='main'>Main</div>
          <div id='aside'>Right</div>
          <div id='footer'>Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
