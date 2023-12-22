import React, { useEffect } from "react";
import "./Panel2.css";

import banana from "./banana.jpg";
import kiwi from "./kiwi.jpg";
import mandarin from "./mandarin.jpg";
import pineapple from "./pineapple.jpg";
import strawberry from "./strawberry.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Panel2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="panel2">
      <div className="panel2-list">
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="0">
          <img className="panel2-list-image" src={banana} alt="banana" />
          {/* <p className="panel2-list-text"><a href="#"> Banana </a></p> */}
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="100">
          <img className="panel2-list-image" src={kiwi} alt="kiwi" />
          {/* <p className="panel2-list-text"><a href="#"> Kiwi </a></p> */}
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="200">
          <img className="panel2-list-image" src={mandarin} alt="mandarin" />
          {/* <p className="panel2-list-text"><a href="#"> Mandarin </a></p> */}
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="300">
          <img className="panel2-list-image" src={pineapple} alt="pineapple" />
          {/* <p className="panel2-list-text"><a href="#"> Pineapple </a></p> */}
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="400">
          <img className="panel2-list-image" src={strawberry} alt="strawberry" />
          {/* <p className="panel2-list-text"><a href="#"> Strawberry </a></p> */}
        </div>
      </div>
    </div>
  );
}

export default Panel2;