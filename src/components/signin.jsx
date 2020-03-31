import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import API from "../API";

import ACTION from "../redux/customer/customer.action";

import "../scss/styles.scss";

const SignIn = props => {
  React.useEffect(() => {
    if (props.isLoggedIn) {
      return <Redirect exact to="/" />;
    }
  });

  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    API.getCustomer(email, password).then(response => {
      if (response.data.message) {
        return ACTION.addCustomer(true);
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
          ref={emailInput}
        />
        <label htmlFor="signin-password">비밀번호*</label>
        <input
          type="password"
          name="password"
          id="signin-password"
          placeholder="비밀번호를 입력해주세요."
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
