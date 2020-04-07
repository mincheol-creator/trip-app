import React from "react";

import "../scss/styles.scss";

const DashBoard = props => {
  return (
    <div className="user-dashboard">
      <aside className="user-dashboard-side">
        <div className="user-profile">
          <div className="user-profile__pic"></div>
          <div className="user-profile__name">Minha Koo</div>
        </div>
        <div className="user-point">
          <span>130</span> 포인트
        </div>
        <div className="user-menu">
          <ul>
            <li>구매내역</li>
            <li>찜 목록</li>
            <li>리뷰작성</li>
            <li>계정설정</li>
          </ul>
        </div>
      </aside>
      <section className="user-dashboard-main">
        메인파트. 유저가 구매한 내역 등이 랜더링
      </section>
    </div>
  );
};

export default DashBoard;
