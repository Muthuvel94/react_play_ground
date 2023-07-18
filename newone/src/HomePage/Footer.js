import React from 'react';
import './Footer.css';
class Footer extends React.Component {
  render() {
    return (
      <div className='Footer'>
        <label>Logo</label>
        <p>Orders are listed through the panel</p>

        <ul className='shortlinks'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact us</li>
        </ul>

        <ul className='medialinks'>
          <li>
            <a href='www.facebook.com/'>Lorem</a>{' '}
          </li>
          <li>
            <a href='www.instagram.com/'>Lorem</a>{' '}
          </li>
          <li>
            <a href='www.Youtube.com/'>Lorem</a>{' '}
          </li>
        </ul>
        <p className='describe-tab'>Orders are listed through the panel</p>
      </div>
    );
  }
}

export default Footer;
