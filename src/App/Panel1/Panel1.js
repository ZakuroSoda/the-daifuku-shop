import React, { useEffect } from "react";
import "./Panel1.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Panel1() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="panel1">
      <div className="panel1-card" data-aos="fade-down" data-aos-duration="1000">
        <div className="panel1-text">Our Signature</div>
        <div className="panel1-header">DAIFUKU</div>
        <a href="#" className="panel1-button">Buy Now</a>
      </div>
    </div>
  );
}

export default Panel1;