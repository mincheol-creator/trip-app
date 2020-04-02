import React from "react";

import ProductCard from "../components/product-card";

import "../scss/styles.scss";

const TourPreview = () => {
  return (
    <div className="tour-preview">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default TourPreview;
