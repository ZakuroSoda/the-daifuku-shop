import React, { useEffect } from "react";
import './Menu.css';

import Link from '../../components/Link/Link';

import AOS from 'aos';
import 'aos/dist/aos.css';

import mandarin from './mandarin.jpg';

function Menu() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="menu">
      <div className="card" data-aos="zoom-in">
        <img className="card-image" src={mandarin} alt="mandarin" />
        <div className="card-body">
          <div className="card-body-title">Mandarin Daifuku</div>
          <div className="card-body-text">$69.00</div>
          <div className="card-body-button">Add to Cart</div>
        </div>
      </div>
      <div className="card" data-aos="zoom-in">
        <img className="card-image" src={mandarin} alt="mandarin" />
        <div className="card-body">
          <div className="card-body-title">Mandarin Daifuku</div>
          <div className="card-body-text">$69.00</div>
          <div className="card-body-button">Add to Cart</div>
        </div>
      </div>
      <div className="card" data-aos="zoom-in">
        <img className="card-image" src={mandarin} alt="mandarin" />
        <div className="card-body">
          <div className="card-body-title">Mandarin Daifuku</div>
          <div className="card-body-text">$69.00</div>
          <div className="card-body-button">Add to Cart</div>
        </div>
      </div>
      <div className="card" data-aos="zoom-in">
        <img className="card-image" src={mandarin} alt="mandarin" />
        <div className="card-body">
          <div className="card-body-title">Mandarin Daifuku</div>
          <div className="card-body-text">$69.00</div>
          <div className="card-body-button">Add to Cart</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;