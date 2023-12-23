import React, { useEffect } from "react";
import "./Panel2.css";

import banana from "./banana.jpg";
import kiwi from "./kiwi.jpg";
import mandarin from "./mandarin.jpg";
import pineapple from "./pineapple.jpg";
import strawberry from "./strawberry.jpg";

import gluten from "./gluten.svg";
import sugar from "./sugar.svg";
import vegan from "./vegan.svg";

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
          <a href="#">
            <img className="panel2-list-image" src={banana} alt="banana" />
            {/* <p className="panel2-list-text"><a href="#"> Banana </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="100">
          <a href="#">
            <img className="panel2-list-image" src={kiwi} alt="kiwi" />
            {/* <p className="panel2-list-text"><a href="#"> Kiwi </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="200">
          <a href="#">
            <img className="panel2-list-image" src={mandarin} alt="mandarin" />
            {/* <p className="panel2-list-text"><a href="#"> Mandarin </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="300">
          <a href="#">
            <img className="panel2-list-image" src={pineapple} alt="pineapple" />
            {/* <p className="panel2-list-text"><a href="#"> Pineapple </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="400">
          <a href="#">
            <img className="panel2-list-image" src={strawberry} alt="strawberry" />
            {/* <p className="panel2-list-text"><a href="#"> Strawberry </a></p> */}
          </a>
        </div>
      </div>

      <div className="panel2-info">
        <div className="panel2-info-group" data-aos="fade-right" data-aos-delay="0">
          <img className="panel2-info-image" src={gluten} alt="gluten" />
          <p className="panel2-info-text"> Gluten Free </p>
        </div>
        <div className="panel2-info-group" data-aos="fade-up" data-aos-delay="0">
          <img className="panel2-info-image" src={sugar} alt="sugar" />
          <p className="panel2-info-text"> No Added Sugar </p>
        </div>
        <div className="panel2-info-group" data-aos="fade-left" data-aos-delay="0">
          <img className="panel2-info-image" src={vegan} alt="vegan" />
          <p className="panel2-info-text"> Vegan </p>
        </div>
      </div>
    </div>
  );
}

export default Panel2;