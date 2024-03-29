import React from "react";
import { connect } from "react-redux";
import ProductCard from "./product-card";
import API from "../API";

const data = [
  // product_id로 조회한 카드 랜더링 정보
  {
    id: 7,
    name: "구엘공원 입장권",
    adult_price: 10000,
    photo: ""
  }
];
// 나중에 DB에서 불러오는 유저 찜 목록 데이터
/*
{
  id: likes 데이터 PK,
  product_id: 7
}
*/

const LikedProducts = props => {
  // dashboard에서 랜더링할때는 3~4개까지만 보여주고 더보기 ㄱ
  const [likedList, setLikedList] = React.useState([]);

  React.useEffect(() => {
    // 유저의 데이터 불러와서 랜더링!
    if (!props.customer.isLoggedIn) {
      alert("로그인 해주세요.");
      window.location.href = "/user/signup";
    } else {
      if (likedList.length < 1) {
        API.getLikes().then(response => {
          setLikedList(response.data);
        });
      }
    }
  }, []);

  return (
    <div className="liked-products">
      <div className="liked-products__title">찜 목록</div>
      <div className="liked-products__list">
        {likedList.length > 0
          ? likedList.map(productData => {
              return (
                <ProductCard key={data.id} data={productData} isLiked={true} />
              );
            })
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(LikedProducts);
