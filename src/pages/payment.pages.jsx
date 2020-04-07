import React from "react";

class PaymentPage extends React.Component {
  constructor() {
    super();
    this.state = {};
    // 구매한 product 정보 랜더링 필요
  }

  render() {
    return (
      <div className="product-pay">
        <header className="product-pay__main-message">
          결제가 <span>완료</span>되었습니다.
        </header>
        <div className="product-pay__product-info">상품 정보</div>
        <div className="product-pay__payment-info">결제 정보</div>
        <div className="product-pay__buttons">
          <button>홈으로</button>
          <button>구매내역 확인</button>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
