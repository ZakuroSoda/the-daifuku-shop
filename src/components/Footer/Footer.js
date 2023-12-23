import React from 'react';
import './Footer.css';

import discordIcon from './discord-icon.svg';
import instagramIcon from './instagram-icon.svg';
import emailIcon from './email-icon.svg';

function Footer() {
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
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section legal">
            <ul className="footer-list">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-newsletter">
          <h2 className="logo-text">Newsletter</h2>
          <p>Receive updates, access to deals and more...</p>
          <form action='#'>
            <input className="footer-newsletter-input" type="email" placeholder="Enter your email" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Footer;