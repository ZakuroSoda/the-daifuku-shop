import React, { useState, useContext } from 'react';
import { UserContext } from '../components/Context/UserContext';
import { CartVisibleContext } from '../components/Context/CartVisibleContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';
import Login from './Login/Login';
import Signup from './Signup/Signup'
import './Account.css';

function Account() {

  const { user, setUser } = useContext(UserContext);
  const { cartVisible, setCartVisible } = useContext(CartVisibleContext);

  const [page, setPage] = useState('login');

  return (
    <div className="Account">
      <Navbar cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <div className="body">
        <Login page={page} setPage={setPage} setUser={setUser} />
        <Signup page={page} setPage={setPage} setUser={setUser} />
      </div>
      <Footer />
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
    </div>
  );
}

export default Account;
