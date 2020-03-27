import React from "react";

import "../scss/styles.scss";

import Header from "../components/header";
import Slick from "../components/slick";

const ProductPage = () => {
  const handleClick = () => {
    return alert();
  };

  return (
    <>
      <Header />
      <div className="product">
        <section className="product-main">여기에 상품 이름, 설명 등</section>
        <section className="product-side">
          <div className="product-side__price">₩35,000</div>
          <button onClick={handleClick}>구매하기</button>
          <button>🤍 찜 목록에 넣기</button>
        </section>
        {/* <Slick /> */}
        {/*  */}
      </div>
    </>
  );
};

export default ProductPage;
