import React from "react";
import { connect } from "react-redux";

import "../scss/styles.scss";
import LikedProducts from "./likedProducts";
import ReviewForm from "./review-form";
import OrderedList from "./ordered-list";
import API from "../API";

const DashBoard = props => {
  const [menu, setMenu] = React.useState("default");
  const [point, setPoint] = React.useState(0);
  const [reviewData, setReviewData] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (!props.customer.isLoggedIn) {
      alert("로그인 해주세요.");
      window.location.href = "/user/signup";
    } else {
      // 유저 구매내역 (리뷰 작성 안된 것) 불러오기
      if (reviewData.length < 1) {
        API.getOrderList().then(response => {
          const data = response.data;
          setReviewData(
            data.filter(data => data.orders[0].is_review_written === false)
          );
          setData(data);
        });
      }

      // 유저의 포인트 불러오기
      setPoint(10);
    }
  }, []);

  const renderMain = menu => {
    switch (menu) {
      case "orders":
        return <OrderedList data={data} />;
      case "review":
        return <ReviewForm data={reviewData} />;
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
                  <span>{reviewData.length}</span> 개의 여행 후기 작성 가능
                </button>
              </div>
            </div>
            <div className="liked-sample">
              <LikedProducts />
              <button
                className="liked-product__fullRender-btn"
                onClick={() => setMenu("likes")}
              >
                더보기
              </button>
              {/* 찜목록에서 세개만! 불러오고 더보기 버튼 */}
            </div>
          </>
        );
    }
  };

  return (
    <div className="user-dashboard">
      {props.customer.isLoggedIn ? (
        <>
          <aside className="user-dashboard-side">
            <div className="user-profile">
              <div
                className="user-profile__pic"
                style={{
                  backgroundImage: `url("/img/porto.jpg")`
                }}
              ></div>
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
                <li onClick={() => setMenu("review")}>후기작성</li>
                <li onClick={() => setMenu("setting")}>계정설정</li>
              </ul>
            </div>
          </aside>

          <section className="user-dashboard-main">{renderMain(menu)}</section>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(DashBoard);
