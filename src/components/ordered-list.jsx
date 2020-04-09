import React from "react";

const OrderedList = () => {
  return (
    <div className="ordered-list">
      <header>예약내역</header>
      <div className="order">
        <div className="order-number">2008124950</div>
        <div className="order-body">해리포터 스튜디오 외 1건</div>
        <div className="order-button">
          <button>예약 상세 보기</button>
        </div>
      </div>
    </div>
  );
};

export default OrderedList;

// order 테이블에서 현재날짜랑 비교해서 아직 사용되지 않은 구매내역만 랜더링
