import React from "react";
import { connect } from "react-redux";

import store from "../redux/store";

import API from "../API";
import Cookies from "universal-cookie";

import addCustomer from "../redux/customer/customer.action";

import "../scss/styles.scss";

const cookies = new Cookies();

const SignIn = props => {
  React.useEffect(() => {
    if (props.customer.isLoggedIn) {
      window.location.href = "/";
    }
  });

  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    API.getCustomer(email, password).then(response => {
      console.log(response);
      if (response.data.message) {
        alert("로그인에 성공했습니다.");
        store.dispatch(
          addCustomer({
            isLoggedIn: true
          })
        );
        cookies.set("loggedIn", true, { path: "/" });
      } else {
        alert("로그인에 실패했습니다.");
      }
    });
  };

  return (
    <div className="signin">
      <h1>로그인</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="signin-email">이메일*</label>
        <input
          type="email"
          name="email"
          id="signin-email"
          placeholder="ID@example.com"
          required
          ref={emailInput}
        />
        <label htmlFor="signin-password">비밀번호*</label>
        <input
          type="password"
          name="password"
          id="signin-password"
          placeholder="비밀번호를 입력해주세요."
          required
          ref={passwordInput}
        />
        <label htmlFor="keep_session">
          <input type="checkbox" name="" id="keep_session" />
          로그인 상태 유지
        </label>

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(SignIn);
