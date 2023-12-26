import React, { useEffect, useState } from 'react';

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
  useEffect(() => {
    AOS.init();
  }, []);

  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className="App">
      <Navbar setCartVisible={setCartVisible} />
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
