import React from "react";
import "./style.css";
import apparel1 from "../../assets/products/apparel1.jpg";
import apparel2 from "../../assets/products/apparel2.jpg";
import apparel3 from "../../assets/products/apparel3.jpg";
import apparel4 from "../../assets/products/apparel4.jpg";
import shoe1 from "../../assets/products/shoe1.jpg";
import shoe2 from "../../assets/products/shoe2.jpg";
import shoe3 from "../../assets/products/shoe3.jpg";
import shoe4 from "../../assets/products/shoe4.jpg";

export default function FeatureProduct() {
  return (
    <div className="features">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="sectop flexitem">
              <h2>
                <span className="circle"></span>
                <span>Featured Products</span>
              </h2>
              <div className="second-links">
                <a href="#" className="view-all">
                  View all<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="products main flexwrap">
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={apparel1} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>25%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(1,955)</span>
                  </div>
                  <h3>
                    <a href="#">Under Armour Men's Tech</a>
                  </h3>
                  <div className="price">
                    <span className="current">$56.50</span>
                    <span className="normal mini-text">$75.50</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={apparel2} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>17%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(994)</span>
                  </div>
                  <h3>
                    <a href="#">
                      Women's Lightweight Knit Hoodie Sweater Pullover
                    </a>
                  </h3>
                  <div className="price">
                    <span className="current">$37.50</span>
                    <span className="normal mini-text">$45.50</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>Polyester, Cotton</li>
                      <li>Pull On closure</li>
                      <li>Fashion Personality</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={apparel3} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>31%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(3,459)</span>
                  </div>
                  <h3>
                    <a href="#">Happy Sailed Womens Summer Boho Floral</a>
                  </h3>
                  <div className="price">
                    <span className="current">$129.99</span>
                    <span className="normal mini-text">$189.98</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>65% Polyester, 35% Cotton</li>
                      <li>Imported</li>
                      <li>Machine Wash</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={apparel4} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>35%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(10)</span>
                  </div>
                  <h3>
                    <a href="#">Womens Summer Boho Floral</a>
                  </h3>
                  <div className="price">
                    <span className="current">$118.90</span>
                    <span className="normal mini-text">$189.90</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>Polyester, Cotton</li>
                      <li>Pull On closure</li>
                      <li>Fashion Personality</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={shoe1} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>32%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(2,551)</span>
                  </div>
                  <h3>
                    <a href="#">
                      Men Slip On Shoes Casual with Arch Support Insoles
                    </a>
                  </h3>
                  <div className="price">
                    <span className="current">$80.90</span>
                    <span className="normal mini-text">$119.90</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>Polyester, Cotton</li>
                      <li>Pull On closure</li>
                      <li>Fashion Personality</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={shoe2} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>30%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(1,237)</span>
                  </div>
                  <h3>
                    <a href="#">Skechers Women's Go Joy Walking Shoe Sneaker</a>
                  </h3>
                  <div className="price">
                    <span className="current">$45.95</span>
                    <span className="normal mini-text">$64.95</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>Polyester, Cotton</li>
                      <li>Pull On closure</li>
                      <li>Fashion Personality</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={shoe3} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>25%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(106)</span>
                  </div>
                  <h3>
                    <a href="#">Walking Shoe Sneaker Womens</a>
                  </h3>
                  <div className="price">
                    <span className="current">$139.99</span>
                    <span className="normal mini-text">$189.98</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>Polyester, Cotton</li>
                      <li>Pull On closure</li>
                      <li>Fashion Personality</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="thumbnail object-cover">
                    <a href="#">
                      <img src={shoe4} alt="" />
                    </a>
                  </div>
                  <div className="hoverable">
                    <ul>
                      <li className="active">
                        <a href="#">
                          <i className="ri-heart-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-eye-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-shuffle-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="discount circle flexcenter">
                    <span>24%</span>
                  </div>
                </div>
                <div className="content">
                  <div className="rating">
                    <div className="stars"></div>
                    <span className="mini-text">(25)</span>
                  </div>
                  <h3>
                    <a href="#">Womens Summer Tosca Shoe</a>
                  </h3>
                  <div className="price">
                    <span className="current">$104.90</span>
                    <span className="normal mini-text">$189.98</span>
                  </div>
                  <div className="footer">
                    <ul className="mini-text">
                      <li>Polyester, Cotton</li>
                      <li>Pull On closure</li>
                      <li>Fashion Personality</li>
                    </ul>
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
