import React, { useEffect, useState } from 'react';

import './Account.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';

import Login from './Login/Login';

function Account() {

  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className="Account">
      <Navbar cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <div className="body">
        <Login />
      </div>
      <Footer />
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
    </div>
  );
}

export default Account;