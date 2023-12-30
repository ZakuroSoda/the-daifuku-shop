import React from "react";
import { Link } from "react-router-dom"
import "./Panel1.css";

function Panel1() {
  return (
    <div className="panel1">
      <div className="panel1-card" data-aos="fade-down" data-aos-duration="1000">
        <div className="panel1-text">Our Signature</div>
        <div className="panel1-header">DAIFUKU</div>
        <Link to="/shop" className="panel1-button">Buy Now</Link>
      </div>
    </div>
  );
}

export default Panel1;