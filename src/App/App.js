import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../components/Context/UserContext';
import { CartVisibleContext } from '../components/Context/CartVisibleContext';

import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import Panel1 from './Panel1/Panel1';
import Panel2 from './Panel2/Panel2';
import Panel3 from './Panel3/Panel3';
import Ticker from './Ticker/Ticker';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { cartVisible, setCartVisible } = useContext(CartVisibleContext);
  const { user, setUser } = useContext(UserContext);
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <div className="body">
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </div>
      <Footer />
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
    </div>
  );
}

export default App;
