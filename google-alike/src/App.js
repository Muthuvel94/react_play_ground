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
            <div id='dropdown-wrapper'>
              {' '}
              <i id='dropdown-menu' className='material-icons'>
                apps
              </i>
              <div id='app-dropdown'>
                <div className='app-item'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZbMRs0TMl11J5QnZ2MRE1gJskU5-lrBI18xjML93CvQ&s'
                    alt=' '
                  ></img>
                  <p>Search</p>
                </div>
                <div className='app-item'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png'
                    alt=' '
                  ></img>
                  <p>Maps</p>
                </div>
                <div className='app-item'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOIqiMnNTM5EZosIXmwQAvVNseJVuTOWvhuJZnaqNRQ&s'
                    alt=' '
                  ></img>
                  <p>Drive</p>
                </div>
                <div className='app-item'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png'
                    alt=' '
                  ></img>
                  <p>Calender</p>
                </div>
                <div className='app-item'>
                  <img
                    src='https://1000logos.net/wp-content/uploads/2020/05/Google-Photos-logo.jpg'
                    alt=' '
                  ></img>
                  <p>Photos</p>
                </div>
                <div className='app-item'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5M50iQIwhr_Do131qClLd4RZpPl_Pk1fvw&usqp=CAU'
                    alt=' '
                  ></img>
                  <p>Mail</p>
                </div>
              </div>
            </div>
            <img
              className='userpic'
              src='https://img.icons8.com/color/2x/user.png'
              alt='Profile Pic'
            ></img>
          </navigator>
        </header>
        <body>
          <img
            className='gpic'
            alt='nopic'
            src='https://i.kym-cdn.com/photos/images/newsfeed/002/052/110/0e1.gif'
          ></img>{' '}
          <br />
          <div id='input-wrapper'>
            <input id='search-box' />
            <img
              className='voice-search'
              src='https://play-lh.googleusercontent.com/C3oTVtjw9Xl3icZ9XAT1-U8QBEEXX9rXZbC26-DL9lwstzC3RIKwLeQMT57CZbS4QA'
              alt='voice icon'
            ></img>
          </div>
          <div>
            <button className='custom-btn'>Google Search</button>{' '}
            <button className='custom-btn'>I'm Feeling Lucky</button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
