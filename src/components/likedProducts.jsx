import React from "react";
import { connect } from "react-redux";

const LikedProducts = props => {
  React.useEffect(() => {
    if (!props.isLoggedIn) {
      alert("로그인 해주세요.");
      window.location.href = "/user/signup";
    }
  });

  return <div className="liked-products">찜목록</div>;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(LikedProducts);
