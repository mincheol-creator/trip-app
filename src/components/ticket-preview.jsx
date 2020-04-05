import React from "react";

import "../scss/styles.scss";
import ProductCard from "./product-card";

const TicketPreview = ({ ticket }) => {
  return (
    <div className="ticket-preview">
      <div className="ticket-preview__title">
        <div className="ticket-preview__title-main">
          🎟 놓치면 안돼! 오늘의 티켓
        </div>
        <div className="ticket-preview__title-sub">
          오늘만 한정 특가! 여행의 필수품인 티켓을 먼저 챙겨요.
        </div>
      </div>
      <div className="ticket-preview__list">
        <ProductCard data={ticket[0]} />
        <ProductCard data={ticket[0]} />
        <ProductCard data={ticket[0]} />
        <ProductCard data={ticket[0]} />
      </div>
    </div>
  );
};

export default TicketPreview;
