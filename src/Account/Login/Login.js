import React from 'react';
import './Login.css';
import arrow from './arrow.svg';

import Link from '../../components/Link/Link';

function Login({ page, setPage }) {
  if (page !== 'login') return null;
  return (
    <div className="Login">
      <div className="login-header">Login</div>
      <div className="login-desc">Please enter your e-mail and password to continue:</div>
      <form className="login-form">
        <div className="login-form-row">
          <input className="login-form-input" type="email" id="email" name="email" placeholder=" " autoComplete="off" required/>
          <label className="login-form-label" htmlFor="email">
            Email
          </label>
        </div>
        <div className="login-form-row">
          <input className="login-form-input" type="password" id="password" name="password" placeholder=" " autoComplete="off" required/>
          <label className="login-form-label" htmlFor="password">
            Password
          </label>
        </div>
        <div className="login-form-row">
          No account? Click <Link onClick={() => setPage('signup')} content="here" bold={false} color="black"/> to register.
        </div>
        <div className="login-form-row">
          <a className="login-form-submit"><img src={arrow} className="login-form-submit-icon" /></a>
        </div>
      </form>
    </div>
  );
}

export default Login;