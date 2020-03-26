import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="header-logo">모두의 트립</div>
      <nav className="header-navigation">
        <ul>
          <li>투어 & 티켓</li>
          <li>할인혜택</li>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
