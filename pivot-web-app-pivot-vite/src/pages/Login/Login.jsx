import React from 'react';
import './Login.scss';
import NavBar from './NavBar/NavBar';
import LoginCard from './LoginCard/LoginCard';

const Login = () => {
  return (
    <div className='login-wrapper'>
      <NavBar />
      <LoginCard />
    </div>
  );
};

export default Login;
