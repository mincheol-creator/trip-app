import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <div className="header-logo">
        <NavLink to="/">모두의 여행</NavLink>
      </div>
      <nav className="header-navigation">
        <ul>
          <li>찜 목록</li>
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
