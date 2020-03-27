import React from "react";

import "../scss/styles.scss";

const SignIn = () => {
  return (
    <div className="signin">
      <form>
        <label htmlFor="signin-email">이메일*</label>
        <input
          type="email"
          name="email"
          id="signin-email"
          placeholder="ID@example.com"
        />
        <label htmlFor="signin-password">비밀번호*</label>
        <input
          type="password"
          name="password"
          id="signin-password"
          placeholder="비밀번호를 입력해주세요."
        />
        <label htmlFor="keep_session">
          <input type="checkbox" name="" id="keep_session" />
          로그인 상태 유지
        </label>
      </form>
    </div>
  );
};

export default SignIn;
