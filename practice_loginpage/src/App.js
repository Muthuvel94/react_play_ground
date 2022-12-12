import React from 'react';
import Home from './Layout/FooterLayout/Home';
import About from './Layout/FooterLayout/About';
import Docs from './Layout/FooterLayout/Docs';
import Blog from './Layout/FooterLayout/Blog';
import ReachUs from './Layout/FooterLayout/ReachUs';
import SignIn from './Layout/FooterLayout/SignIn';
import LoginFrame from './Layout/LoginLayout/LoginFrame';
class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Docs />
        <Blog />
        <ReachUs />
        <SignIn />
        <div>
          <LoginFrame />
        </div>
      </div>
    );
  }
}

export default App;
