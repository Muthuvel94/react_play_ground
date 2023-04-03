import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
  render() {
    return (
      <div className='login-page'>
        <div className='left-panel'>
          <label className='left-label'>RAMACHANDRAN</label>
        </div>
        <div className='right-panel'>
          <div className='login-panel'>
            <div className='login-info'>
              <label className='label1'>Login</label>
              <label className='label2'>Email </label>
              <input
                className='email-input'
                defaultValue='initiate@gmail.com'
              ></input>
              <label className='label3'>Password</label>
              <input
                className='password-input'
                defaultValue='************'
              ></input>
              <button className='login-button'>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
