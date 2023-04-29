import React from "react";
import "./style.css";
import Slider from "../Slider";
import Brands from "../Brands";
import Trending from "../Trending";
import FeatureProduct from "../FeaturedProduct";
import Banner from "../Banner";

export default function Main() {
  return (
    <main>
      <Slider />
      <Brands />
      <Trending />
      <FeatureProduct />
      <Banner />
    </main>
  );
}
