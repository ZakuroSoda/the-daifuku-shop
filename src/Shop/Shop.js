import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../components/Context/UserContext';
import { CartVisibleContext } from '../components/Context/CartVisibleContext';

import './Shop.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import Menu from './Menu/Menu';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Shop() {
  const { user, setUser } = useContext(UserContext);
  const { cartVisible, setCartVisible } = useContext(CartVisibleContext);

  useEffect(() => {
    AOS.init();
  }, []);

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
