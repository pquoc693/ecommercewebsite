import React from "react";
import "./style.css";
import Header from "../../Component/Header";
import HeaderMobile from "../../Component/HeaderMobile";
import Main from "./../../Component/Main/index";
import Footer from "../../Component/Footer";
import MenuBottomMobile from "../../Component/MenuBottomMobile";
import SearchBottomMobile from "../../Component/SearchBottomMobile";

export default function Home() {
  return (
    <div id="page" className="site">
      <HeaderMobile />
      <Header />
      <Main />
      <Footer />
      <MenuBottomMobile />
      <SearchBottomMobile />
    </div>
  );
}
