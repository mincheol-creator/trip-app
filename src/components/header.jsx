import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Cookies from "universal-cookie";

import store from "../redux/store";
import addCustomer from "../redux/customer/customer.action";
import API from "../API";

const cookies = new Cookies();

const Header = props => {
  const handleLogout = () => {
    API.logout();
    cookies.remove("loggedIn");
    store.dispatch(
      addCustomer({
        isLoggedIn: false
      })
    );
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="header-logo">
        <NavLink to="/">모두의 여행</NavLink>
      </div>
      <nav className="header-navigation">
        <ul>
          <li>
            <NavLink to="/user/likes">찜 목록</NavLink>
          </li>
          {props.customer.isLoggedIn ? (
            <>
              <li>
                <NavLink to="/user/dashboard">마이페이지</NavLink>
              </li>
              <li onClick={handleLogout}>로그아웃</li>
            </>
          ) : (
            <>
              <li className="header-navigation__login">
                <NavLink to="/user/signin">로그인</NavLink>
              </li>
              <li>
                <NavLink to="/user/signup">회원가입</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

// mapStateToDispatch 로 로그아웃 기능 구현

export default connect(mapStateToProps, null)(Header);
