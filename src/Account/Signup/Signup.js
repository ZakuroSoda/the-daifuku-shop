import React from 'react';
import './Signup.css';
import arrow from './arrow.svg';

import Link from '../../components/Link/Link';

function Signup({ page, setPage }) {
  if (page !== 'signup') return null;
  return (
    <div className="Signup">
      <div className="signup-header">Register</div>
      <div className="signup-desc">Please enter your e-mail and password to continue:</div>
      <form className="signup-form">
        <div className="signup-form-row">
          <input className="signup-form-input" type="email" id="email" name="email" placeholder=" " autoComplete="off" required/>
          <label className="signup-form-label" htmlFor="email">
            Email
          </label>
        </div>
        <div className="signup-form-row">
          <input className="signup-form-input" type="password" id="password" name="password" placeholder=" " autoComplete="off" required/>
          <label className="signup-form-label" htmlFor="password">
            Password
          </label>
        </div>
        <div className="login-form-row">
          Already registered? Click <Link onClick={() => setPage('login')} content="here" bold={false} color="black"/> to login.
        </div>
        <div className="signup-form-row">
          <a className="signup-form-submit"><img src={arrow} className="signup-form-submit-icon" /></a>
        </div>
      </form>
    </div>
  );
}

export default Signup;