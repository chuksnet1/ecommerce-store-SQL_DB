import React from "react";
import "./Popular.css";
import ipad from "../../Asset/Image/ipad.png";
import iphone from "../../Asset/Image/iphone.jpeg";
import samsung from "../../Asset/Image/samsung.jpg";
import laptop from "../../Asset/Image/laptop.jpg";
import groceries2 from "../../Asset/Image/groceries2.jpg";
import groceries from "../../Asset/Image/groceries.jpg";
import fruit from "../../Asset/Image/fruits.jpg";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="container1">
      <div className="inner-container">
        <div className="pic-up">
          <h3>Pick up where you left off</h3>
          <div className="pic-container">
            <div className="pic-first">
              <img src={ipad} alt="" />
              <Link />
              <img src={iphone} alt="" />
            </div>
            <div className="pic-bottom">
              <img src={laptop} alt="" />
              <img src={samsung} alt="" />
            </div>
          </div>
        </div>
        <div className=" top-offer">
          <h3>Top offers</h3>
          <div className="top-container1">
            <div className="top-first">
              <img src={groceries} alt="" />
              <Link to={`/product/${1}`}>
                <img className="topfirstImg" src={fruit} alt="" />
              </Link>
            </div>
            <div className="top-bottom">
              <img src={laptop} alt="" />
              <img src={iphone} alt="" />
            </div>
          </div>
        </div>
        <div className="popular">
          <h3>Popular categories</h3>
          <div className="pic-container">
            <div className="pic-first">
              <img src={fruit} alt="" />
              <img src={groceries2} alt="" />
            </div>
            <div className="pic-bottom">
              <img src={groceries} alt="" />
              <img src={fruit} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
