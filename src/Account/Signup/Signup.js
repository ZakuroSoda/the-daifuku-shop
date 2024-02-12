import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from '../../components/Link/Link';
import arrow from './arrow.svg';
import './Signup.css';

function Signup({ page, setPage, setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function handleSignup(e) {
    e.preventDefault();

    if (!email || !password) return;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // email regex
    if (!pattern.test(email)) {
      toast.dismiss();
      toast.error('Please enter a valid email address.');
      return;
    }

    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => {
        if (res.status === 200) {
          toast.dismiss();
          toast.success('Signed up and logged in!');
        } else if (res.status === 409) {
          toast.dismiss();
          toast.error('User already exists. Please login.');
          setPage('login');
          return
        } else {
          toast.dismiss();
          toast.error('Something went wrong. Please try again.');
          return
        }
        return res.json();
      })
      .then(user => {
        if (!user?.token) return;
        document.cookie = `token=${user.token}`
        setUser(user)
      })

    setEmail('');
    setPassword('');

  }

  if (page !== 'signup') return null;
  return (
    <>
      <div className="Signup">
        <div className="signup-header">Register</div>
        <div className="signup-desc">Please enter your e-mail and password to continue:</div>
        <form className="signup-form" onSubmit={(e) => handleSignup(e)}>
          <div className="signup-form-row">
            <input
              className="signup-form-input"
              type="email"
              id="email"
              name="email"
              placeholder=" "
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <label className="signup-form-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="signup-form-row">
            <input
              className="signup-form-input"
              type="password"
              id="password"
              name="password"
              placeholder=" "
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <label className="signup-form-label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="login-form-row">
            Already registered? Click <Link onClick={() => setPage('login')} content="here to login" bold={false} color="black" />.
          </div>
          <div className="signup-form-row">
            <button type="submit" className="signup-form-submit"><img src={arrow} className="signup-form-submit-icon" /></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;