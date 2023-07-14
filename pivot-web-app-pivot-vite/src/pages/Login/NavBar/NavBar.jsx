import React from 'react';
import './NavBar.scss';
import logo from '../../../assets/react.svg';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a href='#'>
          <img src={logo} alt='Your Logo' />
          Pivot
        </a>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            How its works?
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Docs
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Blog
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Reach us
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
