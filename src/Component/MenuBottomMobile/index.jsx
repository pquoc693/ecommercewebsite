import React from "react";
import "./style.css";

export default function MenuBottomMobile() {
  return (
    <div className="menu-bottom desktop-hide">
      <div className="container">
        <div className="wrapper">
          <nav>
            <ul className="flexitem">
              <li>
                <a href="#">
                  <i className="ri-bar-chart-line"></i>
                  <span>Trending</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-user-6-line"></i>
                  <span>Account</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-heart-line"></i>
                  <span>Wishlist</span>
                </a>
              </li>
              <li>
                <a href="#0" className="t-search">
                  <i className="ri-search-line"></i>
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="ri-shopping-cart-line"></i>
                  <span>Cart</span>
                  <div className="fly-item">
                    <span className="item-number">0</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
