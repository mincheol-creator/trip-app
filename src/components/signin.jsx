import React from "react";
import store from "../redux/store";
import { connect } from "react-redux";

import "../scss/styles.scss";
import addCustomer from "../redux/customer/customer.action";

const SignIn = props => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  return (
    <div className="signin">
      <h1>로그인</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          store.dispatch(
            addCustomer({
              email: emailInput.current.value,
              password: passwordInput.current.value
            })
          );
          console.log(props.customer); //?
        }}
      >
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
