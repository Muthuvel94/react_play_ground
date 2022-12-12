import React from 'react';
import '../FooterLayout/SignIn.css';
class SignIn extends React.Component {
  render() {
    return (
      <div>
        <button onClick={console.log('Button is clicked')} className='sign-in'>
          Sign In
        </button>
      </div>
    );
  }
}
export default SignIn;
