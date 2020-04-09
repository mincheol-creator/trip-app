import React from "react";

import "../scss/styles.scss";
import LikedProducts from "./likedProducts";
import ReviewForm from "./review-form";
import OrderedList from "./ordered-list";

const DashBoard = props => {
  const [menu, setMenu] = React.useState("default");
  const [point, setPoint] = React.useState(0);

  React.useEffect(() => {
    // 리뷰 작성해야할 개수 불러오기 (isComplete === false인 데이터 개수)
    // API.getReviewNum(customer_id)
  }, []);

  const renderMain = menu => {
    switch (menu) {
      case "orders":
        return <OrderedList />;
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
            <div className="liked-sample">
              <LikedProducts />
              <button className="liked-product__fullRender-btn">더보기</button>
              {/* 찜목록에서 세개만 불러오고 더보기 버튼 */}
            </div>
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
          <span>{point}</span> 포인트
        </div>
        <div className="user-menu">
          <ul>
            <li onClick={() => setMenu("default")}>대시보드</li>
            <li onClick={() => setMenu("orders")}>예약내역</li>
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
