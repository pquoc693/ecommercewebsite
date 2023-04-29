import React, { useEffect } from "react";
import "./style.css";

export default function SearchBottomMobile() {
  useEffect(() => {
    //show search
    const searchButton = document.querySelector(".t-search"),
      tClose = document.querySelector(".search-close"),
      showClass = document.querySelector(".site");
    searchButton.addEventListener("click", function () {
      showClass.classList.toggle("showsearch");
    });
    tClose.addEventListener("click", function () {
      showClass.classList.remove("showsearch");
    });
  }, []);

  return (
    <div className="search-bottom desktop-hide">
      <div className="container">
        <div className="wrapper">
          <form action="" className="search">
            <a href="#" className="t-close search-close flexcenter">
              <i className="ri-close-line"></i>
            </a>
            <span className="icon-large">
              <i className="ri-search-line"></i>
            </span>
            <input type="search" placeholder="Search" required />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
