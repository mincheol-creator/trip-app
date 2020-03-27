import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <div className="header-logo">모두의 트립</div>
      <nav className="header-navigation">
        <ul>
          <li>투어 & 티켓</li>
          <li>할인혜택</li>
          <li>
            <NavLink to="/user">로그인</NavLink>
          </li>
          <li>
            <NavLink to="/user">회원가입</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
