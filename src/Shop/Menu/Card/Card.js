import React from "react";
import './Card.css';

function Card(props) {
  return (
    <>
      <div className="card" data-aos="zoom-in">
        <img className="card-image" src={props.image_url} alt={props.name} />
        <div className="card-body">
          <div className="card-body-title">{props.name}</div>
          <div className="card-body-text">${props.price}</div>
          <div className="card-body-button">Add to Cart</div>
        </div>
      </div>
    </>
  )
}

export default Card;