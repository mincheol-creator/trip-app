import React from "react";

import ProductCard from "../components/product-card";

import "../scss/styles.scss";

const TourPreview = ({ tour }) => {
  return (
    <div className="tour-preview">
      <header className="tour-preview__title">
        <div className="tour-preview__title-main">🚎 가이드 투어</div>
        <div className="tour-preview__title-sub">
          가이드 투어와 함께 깊이 있는 여행을 즐겨 보세요.
        </div>
      </header>
      <div className="tour-preview__list">
        {tour.map(tour => (
          <ProductCard key={tour.id} data={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourPreview;
