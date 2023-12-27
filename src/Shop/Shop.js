import React, { useEffect, useState } from 'react';

import './Shop.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import Menu from './Menu/Menu';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Shop() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cartVisible, setCartVisible] = useState(false);

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
