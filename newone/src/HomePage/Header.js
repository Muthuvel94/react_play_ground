import React from 'react';
import './Header.css';
class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='Header'>
          <label>Logo</label>
          <label>Home</label>
          <label>About us</label>
          <label>Products</label>
          <label>My Orders</label>
          <label>Contact us</label>
        </div>
        <div className='Header2'>
          <input className='input' defaultValue='search'></input>
          <button type='button' className='btn btn-primary'>
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default Header;
