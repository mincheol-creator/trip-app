import React from "react";

const OrderedList = ({ data }) => {
  return (
    <div className="ordered-list">
      <header>예약내역</header>
      {data.map(data => {
        return (
          <>
            <div className="order">
              <div className="order-number">{data.orders[0].order_number}</div>
              <div className="order-body">{data.name}</div>
              <div className="order-button">
                <button>예약 상세 보기</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default OrderedList;

// order 테이블에서 현재날짜랑 비교해서 아직 사용되지 않은 구매내역만 랜더링
