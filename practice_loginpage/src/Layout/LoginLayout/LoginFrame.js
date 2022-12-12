import React from 'react';
import '../LoginLayout/LoginFrame.css';
class LoginFrame extends React.Component {
  render() {
    return (
      <div>
        <input className='name-input1' defaultValue='First Name'></input>
        <input className='name-input2' defaultValue='Last Name'></input>
        <br></br>
        <input
          className='email-input'
          defaultValue='Your Email Address'
        ></input>
        <br></br>
        <input className='pass-input' defaultValue='Pick a Password'></input>
        <br></br>
        <button className='signup-button'>SignUp</button>
      </div>
    );
  }
}

export default LoginFrame;
