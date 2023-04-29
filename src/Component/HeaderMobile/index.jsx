import React, { useEffect } from "react";
import "./style.css";

export default function HeaderMobile() {
  //copy menu for mobile
  function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector(".header-nav nav");
    var navPlace = document.querySelector(".off-canvas nav");
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector(".header-top .wrapper");
    var topPlace = document.querySelector(".off-canvas .thetop-nav");
    topPlace.innerHTML = topNav.innerHTML;
  }

  useEffect(() => {
    copyMenu();
  }, []);

  useEffect(() => {
    const menuButton = document.querySelector(".trigger");
    const closeButton = document.querySelector(".t-close");
    const addclass = document.querySelector(".site");

    function showMenu() {
      addclass.classList.toggle("showmenu");
    }

    function hideMenu() {
      addclass.classList.remove("showmenu");
    }

    //show sub menu on mobile
    const submenu = document.querySelectorAll(".has-child .icon-small");
    submenu.forEach((menu) => menu.addEventListener("click", toggle));

    function toggle(e) {
      e.preventDefault();
      submenu.forEach((item) =>
        item != this
          ? item.closest(".has-child").classList.remove("expand")
          : null
      );
      if (this.closest(".has-child").classList != "expand");
      this.closest(".has-child").classList.toggle("expand");
    }

    menuButton.addEventListener("click", showMenu);
    closeButton.addEventListener("click", hideMenu);

    // Cleanup function
    return () => {
      menuButton.removeEventListener("click", showMenu);
      closeButton.removeEventListener("click", hideMenu);
      submenu.forEach((menu) => menu.removeEventListener("click", toggle));
    };
  }, []); // Empty array as second argument means this useEffect will only run once on component mount

  return (
    <aside className="site-off desktop-hide">
      <div className="off-canvas">
        <div className="canvas-head flexitem">
          <div className="logo">
            <a href="/">
              <span className="circle"></span>.Store
            </a>
          </div>
          <a href="#" className="t-close flexcenter">
            <i className="ri-close-line"></i>
          </a>
        </div>
        <div className="departments"></div>
        <nav></nav>
        <div className="thetop-nav"></div>
      </div>
    </aside>
  );
}
