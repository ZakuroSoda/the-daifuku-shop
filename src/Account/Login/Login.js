import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from '../../components/Link/Link';
import arrow from './arrow.svg';
import './Login.css';

function Login({ page, setPage, setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) return;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // email regex
    if (!pattern.test(email)) {
      toast.dismiss();
      toast.error('Please enter a valid email address.');
      return;
    }

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
    .then(res => {
      if (res.status === 200) {
        toast.dismiss();
        toast.success('Logged in!');
      } else if (res.status === 401) {
        toast.dismiss();
        toast.error('Login failure.');
        return
      } else {
        toast.dismiss();
        toast.error('Something went wrong. Please try again.');
        return
      }
      return res.text();
    })
    .then(token => {
      if (!token) return;
      document.cookie = `token=${token}`
      setUser(email)
    })

    setEmail('');
    setPassword('');

  }

  if (page !== 'login') return null;
  return (
    <>
      <div className="Login">
        <div className="login-header">Login</div>
        <div className="login-desc">Please enter your e-mail and password to continue:</div>
        <form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <div className="login-form-row">
            <input
              className="login-form-input"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="login-form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="login-form-row">
            <input
              className="login-form-input"
              type="password"
              id="password"
              name="password"
              placeholder=" "
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="login-form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="login-form-row">
            No account? Click <Link onClick={() => setPage('signup')} content="here to register" bold={false} color="black" />.
          </div>
          <div className="login-form-row">
            <button type="submit" className="login-form-submit"><img src={arrow} className="login-form-submit-icon" /></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;