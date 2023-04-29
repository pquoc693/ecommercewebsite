import React from "react";
import "./style.css";
import zara from "../../assets/brands/zara.png";
import samsung from "../../assets/brands/samsung.png";
import oppo from "../../assets/brands/oppo.png";
import asus from "../../assets/brands/asus.png";
import hurley from "../../assets/brands/hurley.png";
import dng from "../../assets/brands/dng.png";

export default function Brands() {
  return (
    <div className="brands">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="item">
            <a href="#">
              <img src={zara} alt="" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={samsung} alt="" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={oppo} alt="" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={asus} alt="" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={hurley} alt="" />
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src={dng} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
