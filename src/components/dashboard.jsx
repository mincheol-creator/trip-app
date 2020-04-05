import React from "react";

import "../scss/styles.scss";

const DashBoard = props => {
  return (
    <div className="user-dashboard">
      <aside className="user-dashboard-side">
        사이드바. 유저의 정보가 랜더링
      </aside>
      <section className="user-dashboard-main">
        메인파트. 유저가 구매한 내역 등이 랜더링
      </section>
    </div>
  );
};

export default DashBoard;
