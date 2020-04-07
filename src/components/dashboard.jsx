import React from "react";

import "../scss/styles.scss";
import LikedProducts from "./likedProducts";
import ReviewForm from "./review-form";

const DashBoard = props => {
  const [menu, setMenu] = React.useState("default");

  const renderMain = menu => {
    switch (menu) {
      case "orders":
        return;
      case "review":
        return <ReviewForm />;
      case "likes":
        return <LikedProducts />;
      case "setting":
        return;
      default:
        return (
          <>
            <div className="review-ask">
              <header>여행 후기</header>
              <div className="review-ask__btn">
                <button onClick={() => setMenu("review")}>
                  <span>2</span> 개의 여행 후기 작성 가능
                </button>
              </div>
            </div>
            <LikedProducts />
          </>
        );
    }
  };

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
            <li onClick={() => setMenu("default")}>대시보드</li>
            <li onClick={() => setMenu("orders")}>구매내역</li>
            <li onClick={() => setMenu("likes")}>찜 목록</li>
            <li onClick={() => setMenu("review")}>리뷰작성</li>
            <li onClick={() => setMenu("setting")}>계정설정</li>
          </ul>
        </div>
      </aside>

      <section className="user-dashboard-main">{renderMain(menu)}</section>
    </div>
  );
};

export default DashBoard;
