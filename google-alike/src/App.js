import React from 'react';
import '../src/App.css';
class App extends React.Component {
  render() {
    return (
      <div className='header'>
        <header>
          <navigator>
            <a className='menu-item' href='/'>
              Gmail
            </a>{' '}
            <a className='menu-item' href='/'>
              Images
            </a>
            <i id='dropdown-menu' className='material-icons'>
              apps
            </i>
            <img
              className='userpic'
              src='https://img.icons8.com/color/2x/user.png'
              alt='Profile Pic'
            ></img>
          </navigator>
        </header>
      </div>
    );
  }
}

export default App;
