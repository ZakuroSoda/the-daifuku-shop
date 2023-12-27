import React from 'react';
import './Navbar.css';

import Link from '../Link/Link';

import account from './account.svg';
import cart from './cart.svg';
import flag from './singapore.svg';

function Navbar({ cartVisible, setCartVisible }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-shop">
          <Link href="/shop" content="Shop" color="black" bold={true} />
        </div>
        <div className="navbar-logo">
          <a href="/">
            <img src="/images/mochi-transparent.png" className="navbar-icon-logo" alt="logo" />
          </a>
        </div>
        <ul className="navbar-nav">
          <li><a href="#"><img src={account} className="navbar-icon" alt="account" /></a></li>
          <li><img onClick={ () => setCartVisible(!cartVisible) } src={cart} className="navbar-icon" alt="cart" /></li>
          <li><a href="#"><img src={flag} className="navbar-icon" alt="country" /></a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;