import React from "react";
import { NavLink } from "react-router-dom";

class PaymentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "success"
    };
    // 구매한 product 정보 랜더링 필요
  }

  render() {
    const { status } = this.state;
    return (
      <section className="product-pay">
        <header className="product-pay__main-message">
          결제가 {status === "success" ? <span>완료</span> : <span>취소</span>}
          되었습니다.
        </header>
        <div className="product-pay__product-info">
          <header>상품 정보</header>
          <div>정보 내용내용내용내용내용</div>
        </div>
        <div className="product-pay__payment-info">
          <header>결제 정보</header>
          <div>정보 내용내용내용내용내용</div>
        </div>
        <div className="product-pay__buttons">
          <button className="product-pay__buttons-home">
            <NavLink to="/">홈으로</NavLink>
          </button>
          <button className="product-pay__buttons-mypage">
            <NavLink to="/user/dashboard">구매내역확인</NavLink>
          </button>
        </div>
      </section>
    );
  }
}

export default PaymentPage;
