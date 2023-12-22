import React from 'react';
import './Navbar.css';

import account from './account.svg';
import cart from './cart.svg';
import flag from './singapore.svg';
import logo from './mochi-transparent.png';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-shop">
          <a href="#">Shop</a>
        </div>
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} className="navbar-icon" alt="logo" />
          </a>
        </div>
        <ul className="navbar-nav">
          <li><a href="#"><img src={account} className="navbar-icon" alt="account" /></a></li>
          <li><a href="#"><img src={cart} className="navbar-icon" alt="cart" /></a></li>
          <li><a href="#"><img src={flag} className="navbar-icon" alt="country" /></a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;