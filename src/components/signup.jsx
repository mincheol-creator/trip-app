import React from "react";

const SignUp = () => {
  return (
    <div className="signup">
      <h1>회원가입</h1>
      <form>
        <label htmlFor="signup-email">이메일*</label>
        <input
          type="email"
          name="email"
          id="signup-email"
          placeholder="ID@example.com"
        />

        <label htmlFor="signup-password">비밀번호*</label>
        <input
          type="password"
          name="password"
          id="signup-password"
          placeholder="영문, 숫자, 특수문자 조합 8~20자"
        />

        <label htmlFor="signup-password">비밀번호 확인*</label>
        <input
          type="password"
          name="password"
          id="signup-password"
          placeholder="비밀번호를 한번 더 입력해주세요."
        />

        <label htmlFor="user_consent">
          <input type="checkbox" name="" id="user_consent" />
          전체 약관 동의
        </label>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
