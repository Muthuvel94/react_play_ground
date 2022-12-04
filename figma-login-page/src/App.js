import React from 'react';
import '../src/App.css';
import GoogleButton from 'react-google-button';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='Footer'>
          <span className='Footer-menu'>Home</span>
          <span className='Footer-menu'>How it works ?</span>
          <span className='Footer-menu'>Docx</span>
          <span className='Footer-menu'>Blog</span>
          <span className='Footer-menu'>Reach us</span>
          <span className='Footer-menu'>Sign in</span>
        </div>
        <div className='Demo-video'>Demo</div>
        <div>
          <span className='login-title'>Sign Up & Start your Free Trial</span>
          <label className='bar-line'>
            ------------- Quick Sign Up ------------
          </label>
          <GoogleButton
            className='Google-login'
            type='light'
            onClick={() => {
              console.log('Google button clicked');
            }}
          />
          <span className='alt-login'>Or use your email address</span>
        </div>
        <input className='fst_name' defaultValue='First Name'></input>
        <input className='lst-name' defaultValue='Last Name' />
        <input className='email' defaultValue='Your email address'></input>
        <input className='password' defaultValue='Pick a Password'></input>
        <button className='Login-email'>Signup for Polygot</button>
      </div>
    );
  }
}

export default App;
