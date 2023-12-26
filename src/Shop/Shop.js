import React, { useEffect } from 'react';

import './Shop.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Menu from './Menu/Menu';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Shop() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="shop">
      <Navbar />
      <div className="body">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
