import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../components/Context/UserContext';
import { CartVisibleContext } from '../components/Context/CartVisibleContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import Menu from './Menu/Menu';
import './Shop.css';

function Shop() {
  const { user, setUser } = useContext(UserContext);
  const { cartVisible, setCartVisible } = useContext(CartVisibleContext);

  return (
    <div className="Shop">
      <Navbar cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <div className="body">
        <Menu />
      </div>
      <Footer />
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
    </div>
  );
}

export default Shop;
