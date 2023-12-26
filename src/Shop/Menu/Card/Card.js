import React from "react";
import './Card.css';

import mandarin from './mandarin.jpg';

function Card() {
  return (
    <>
      <div className="card" data-aos="zoom-in">
        <img className="card-image" src={mandarin} alt="mandarin" />
        <div className="card-body">
          <div className="card-body-title">Mandarin Daifuku</div>
          <div className="card-body-text">$69.00</div>
          <div className="card-body-button">Add to Cart</div>
        </div>
      </div>
    </>
  )
}

export default Card;