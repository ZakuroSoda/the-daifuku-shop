import React, { useEffect, useState } from 'react';

import './Account.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';

import Login from './Login/Login';
import Signup from './Signup/Signup'

function Account() {

  const [page, setPage] = useState('login');
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className="Account">
      <Navbar cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <div className="body">
        <Login page={page} setPage={setPage} />
        <Signup page={page} setPage={setPage} />
      </div>
      <Footer />
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
    </div>
  );
}

export default Account;
