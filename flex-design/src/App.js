import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div id='left-menu'>
        <div className='body'>
          <meta charSet='UTF-8'></meta>
          <title>CSS - Handle Long Text</title>
          <link rel='stylesheet' href='/index/css' type='text/css'></link>
          <link
            href='https://fonts.googleapis.com/css?family=Raleway:400,500,600,900&display=swap'
            rel='stylesheet'
          ></link>
          <div>
            <header id='topbar'>
              <nav>
                <p id='logo'>EDYODA</p>
                <p className='menu-item'>Flashbytes</p>
                <p className='menu-item'>Categories</p>
                <p className='menu-item'>Upload Video</p>
              </nav>
            </header>
            <div id='right-menu'>
              <div id='search-container'>
                <input type='text' id='search-box'></input>
                <img
                  src='https://www.edyoda.com/static/media/icon-search-black.659381fa.svg'
                  id='search-icon'
                  alt='no pic'
                ></img>
              </div>
              <img
                src='https://www.edyoda.com/static/media/notification-black.dc5e1138.svg'
                id='notafication-icon'
                alt='no pic'
              />
              <img
                src='https://edyoda.s3.amazonaws.com/media/profile-picture/profile_pic_qaifikhan_kpjI0gD.jpg'
                id='profile-pic'
                alt='no pic'
              ></img>
              <div className='rotate'>Div</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
