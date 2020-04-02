import React from "react";

const ProductCard = ({ tourData }) => {
  const handleClick = () => {
    window.location.href = `/product/${tourData.id}`;
  };
  // console.log(tourData);
  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-card-top">
        <div className="product-card-top__photo">
          {/* <img src={tourData.photo} alt="Tour" /> */}
        </div>
        {/* <div className="product-card-heart"></div> */}
      </div>
      <div className="product-card-bottom">
        <div className="product-card-bottom__title">{tourData.name}</div>
        <div className="product-card-bottom__review">
          <span className="stars">⭐️ 4.5</span>
          <span className="reviews">(200개의 후기)</span>
        </div>
        <div className="product-card-bottom__price">
          {tourData.adult_price}원 / 1인
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
