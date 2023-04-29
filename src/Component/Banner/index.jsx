import React from "react";
import "./style.css";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import procat1 from "../../assets/banner/procat1.jpg";
import procat2 from "../../assets/banner/procat2.jpg";
import procat3 from "../../assets/banner/procat3.jpg";

export default function Banner() {
  return (
    <div className="banners">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="banner flexwrap">
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img src={banner1} alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h3>Brutal Sale!</h3>
                    <h4>
                      <span>Get the deal in here</span>
                      <br />
                      Living Room Chair
                    </h4>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                  <a href="#" className="over-link"></a>
                </div>
              </div>
              <div className="row">
                <div className="item get-gray">
                  <div className="image">
                    <img src={banner2} alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h3>Brutal Sale!</h3>
                    <h4>
                      <span>Discount everyday</span>
                      <br />
                      Office Outfit
                    </h4>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                  <a href="#" className="over-link"></a>
                </div>
              </div>
            </div>
            <div className="product-categories flexwrap">
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img src={procat1} alt="" />
                  </div>
                  <div className="content mini-links">
                    <h4>Beauty</h4>
                    <ul className="flexcol">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Skin Care</a>
                      </li>
                      <li>
                        <a href="#">Hair Care</a>
                      </li>
                      <li>
                        <a href="#">Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Foot & Hand Care</a>
                      </li>
                    </ul>
                    <div className="second-links">
                      <a href="#" className="view-all">
                        View all<i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src={procat2} alt="" />
                    </a>
                  </div>
                  <div className="content mini-links">
                    <h4>
                      <a href="#">Gatdets</a>
                    </h4>
                    <ul className="flexcol">
                      <li>
                        <a href="#">Camera</a>
                      </li>
                      <li>
                        <a href="#">Cell Phones</a>
                      </li>
                      <li>
                        <a href="#">Computers</a>
                      </li>
                      <li>
                        <a href="#">GPS & Navigation</a>
                      </li>
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                    </ul>
                    <div className="second-links">
                      <a href="#" className="view-all">
                        View all<i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <div className="image">
                    <a href="#">
                      <img src={procat3} alt="" />
                    </a>
                  </div>
                  <div className="content mini-links">
                    <h4>
                      <a href="#">Home Decor</a>
                    </h4>
                    <ul className="flexcol">
                      <li>
                        <a href="#">Kitchen</a>
                      </li>
                      <li>
                        <a href="#">Dining Room</a>
                      </li>
                      <li>
                        <a href="#">Pantry</a>
                      </li>
                      <li>
                        <a href="#">Great Room</a>
                      </li>
                      <li>
                        <a href="#">Breakfast Nook</a>
                      </li>
                    </ul>
                    <div className="second-links">
                      <a href="#" className="view-all">
                        View all<i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
