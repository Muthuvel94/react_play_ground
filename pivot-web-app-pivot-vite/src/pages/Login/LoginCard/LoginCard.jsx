import React from 'react';
import google_icon from '../../../assets/google_icon.svg';
import './LoginCard.scss';

const LoginCard = () => {
  return (
    <div className='login-card-wrapper'>
      <div className='card-head'>
        <div className='card-title'>
          <div>Welcome Back</div>
          <div>Log in to you account</div>
        </div>
        <div className='card-form'>
          <div>
            <input type='email' placeholder='Email' title='email' />
          </div>
          <div>
            <input type='password' placeholder='Password' />
          </div>
          <div className='checkbox-keep-me'>
            <label>
              <input type='checkbox' />
              Keep me logged in
            </label>
          </div>
          <div className='btn-login-wrap'>
            <button className='btn-login'>Log in</button>
          </div>

          <div className='btn-login-wrap'>or</div>
          <div className='btn-login-wrap'>
            <img
              className='google-button-image'
              width='30px'
              src={google_icon}
              alt='login'
            />
          </div>
          <div className='btn-login-wrap'>
            <label>
              Don't have an account? <span className='signup-btn'>Sign Up</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
