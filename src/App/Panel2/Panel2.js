import React from "react";
import gluten from "./gluten.svg";
import sugar from "./sugar.svg";
import vegan from "./vegan.svg";
import "./Panel2.css";

function Panel2() {
  return (
    <div className="panel2">
      <div className="panel2-list">
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="0">
          <a href="#">
            <img className="panel2-list-image" src="/images/banana.jpg" alt="banana" />
            {/* <p className="panel2-list-text"><a href="#"> Banana </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="100">
          <a href="#">
            <img className="panel2-list-image" src="/images/kiwi.jpg" alt="kiwi" />
            {/* <p className="panel2-list-text"><a href="#"> Kiwi </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="200">
          <a href="#">
            <img className="panel2-list-image" src="/images/mandarin.jpg" alt="mandarin" />
            {/* <p className="panel2-list-text"><a href="#"> Mandarin </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="300">
          <a href="#">
            <img className="panel2-list-image" src="/images/pineapple.jpg" alt="pineapple" />
            {/* <p className="panel2-list-text"><a href="#"> Pineapple </a></p> */}
          </a>
        </div>
        <div className="panel2-list-group" data-aos="fade-up" data-aos-delay="400">
          <a href="#">
            <img className="panel2-list-image" src="/images/strawberry.jpg" alt="strawberry" />
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