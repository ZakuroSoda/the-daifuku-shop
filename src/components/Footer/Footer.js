import React, { useState } from 'react';
import './Footer.css';

import Link from '../Link/Link';

import discordIcon from './discord-icon.svg';
import instagramIcon from './instagram-icon.svg';
import emailIcon from './email-icon.svg';

import { toast } from 'react-toastify';

function Footer() {

  const [newsletterUser, setNewsletterUser] = useState(''); 

  function handleNewsletterUser(e) {
    e.preventDefault();
    setNewsletterUser(e.target.value);
    if (!newsletterUser) return;

    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // email regex
    if (!pattern.test(newsletterUser)) {
      toast.dismiss();
      toast.error('Please enter a valid email address.');
      return;
    }

    fetch('/api/new-newsletter-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newsletterUser: newsletterUser })
    })
    .then(res => res.status)
    .then(status => {
      if (status === 200) {
        toast.dismiss();
        toast.success('Thank you for subscribing!');
      } else if (status === 409) {
        toast.dismiss();
        toast.error('Already subscribed.');
      } else {
        toast.dismiss();
        toast.error('Something went wrong. Please try again.');
      }
    })

    setNewsletterUser('');
  }

  return (
    <>
      <div className="footer">
        <div className="footer-content">

          <div className="footer-section about">
            <h2 className="logo-text">About Divine Daifuku</h2>
            <p>
              Daifuku is a Japanese sweet made of mochi stuffed with sweetened bean pastes and fruits.
              Divine Daifuku was developed to fill the void where great taste meets low price. With bold, refreshing flavors to help you fulfil your cravings while replenishing and refuelling, Divine Daifuku is the perfect snack for any time. We're confident you'll love it as much as we do.
            </p>
            <a href="#"><img className="footer-icon" src={discordIcon} alt="Discord" /></a>
            <a href="#"><img className="footer-icon" src={instagramIcon} alt="Instagram" /></a>
            <a href="#"><img className="footer-icon" src={emailIcon} alt="Email" /></a>
          </div>

          <div className="footer-section info">
            <ul className="footer-list">
              <li><Link underlineLength="50%" href="#" content="Partnerships" color="white" bold={false}/></li>
              <li><Link underlineLength="50%" href="#" content="Careers" color="white" bold={false}/></li>
              <li><Link underlineLength="50%" href="#" content="FAQs" color="white" bold={false}/></li>
            </ul>
          </div>

          <div className="footer-section legal">
            <ul className="footer-list">
              <li><Link underlineLength="50%" href="#" content="Terms of Service" color="white" bold={false}/></li>
              <li><Link underlineLength="50%" href="#" content="Refund Policy" color="white" bold={false}/></li>
              <li><Link underlineLength="50%" href="#" content="Privacy Policy" color="white" bold={false}/></li>
            </ul>
          </div>

        </div>

        <div className="footer-newsletter">
          <h2 className="logo-text">Newsletter</h2>
          <p>Receive updates, access to deals and more...</p>
          <form onSubmit={(e) => handleNewsletterUser(e)}>
            <input 
              className="footer-newsletter-input"
              type="email"
              placeholder="Enter your email"
              value={newsletterUser}
              onChange={(e) => setNewsletterUser(e.target.value)}
              />
          </form>
        </div>
      </div>
    </>
  );
}

export default Footer;