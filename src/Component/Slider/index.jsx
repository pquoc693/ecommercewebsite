import React, { useEffect, useState } from "react";
import "./style.css";
import slider0 from "../../assets/slider/slider0.jpg";
import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";

export default function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const swiper = new window.Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
        // dynamicBullets: true
      },
      on: {
        slideChange: () => {
          console.log("swiper.realIndex", swiper.realIndex);
          setActiveSlideIndex(swiper.realIndex);
        }
      }
    });
  }, []);

  return (
    <div className="slider">
      <div className="container">
        <div className="wrapper">
          <div className="myslider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src={slider0} alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Shoes Fashion</h4>
                    <h2>
                      <span>Come and Get it!</span>
                      <br />
                      <span>Brand New Shoes</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src={slider1} alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Quick Fashion</h4>
                    <h2>
                      <span>Fit Your Wardrobe</span>
                      <br />
                      <span>With Luxury Items</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src={slider2} alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Quick Offer</h4>
                    <h2>
                      <span>Wooden Minimal Sofa</span>
                      <br />
                      <span>Extra 50% off</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src={slider3} alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Best Deals</h4>
                    <h2>
                      <span>Home Workout Accessories</span>
                      <br />
                      <span>Push The Limit</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination">
              <div
                className={
                  activeSlideIndex === 0
                    ? "swiper-pagination-bullet swiper-pagination-bullet-active"
                    : "swiper-pagination-bullet"
                }
              ></div>
              <div
                className={
                  activeSlideIndex === 1
                    ? "swiper-pagination-bullet swiper-pagination-bullet-active"
                    : "swiper-pagination-bullet"
                }
              ></div>
              <div
                className={
                  activeSlideIndex === 2
                    ? "swiper-pagination-bullet swiper-pagination-bullet-active"
                    : "swiper-pagination-bullet"
                }
              ></div>
              <div
                className={
                  activeSlideIndex === 3
                    ? "swiper-pagination-bullet swiper-pagination-bullet-active"
                    : "swiper-pagination-bullet"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
