import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Link/Link';
import account from './account.svg';
import cart from './cart.svg';
import flag from './singapore.svg';
import './Navbar.css';


function Navbar({ cartVisible, setCartVisible }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-shop">
          <Link to="/shop" style={{textDecoration: "none"}}>
            <CustomLink href="/shop" content="Shop" color="black" bold={true} />
          </Link>
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <img src="/images/mochi-transparent.png" className="navbar-icon-logo" alt="logo" />
          </Link>
        </div>
        <ul className="navbar-nav">
          <li><Link to="/account"><img src={account} className="navbar-icon" alt="account" /></Link></li>
          <li><img onClick={ () => setCartVisible(!cartVisible) } src={cart} className="navbar-icon" alt="cart" /></li>
          <li><a href="#"><img src={flag} className="navbar-icon" alt="country" /></a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;