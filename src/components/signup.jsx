import React from "react";
import { connect } from "react-redux";

import API from "../API";

const SignUp = props => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();
  let passwordConfirmInput = React.createRef();
  let consentInput = React.createRef();

  const clearInput = () => {
    emailInput.current.value = "";
    passwordInput.current.value = "";
    passwordConfirmInput.current.value = "";
    consentInput.current.checked = false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    let passwordConfirm = passwordConfirmInput.current.value;
    // let consent = consentInput.current.checked; // 나중에 체크
    if (password === passwordConfirm) {
      // server -> db로 보냄
      API.addCustomer(email, password).then(response => {
        if (response.data.message) {
          alert("회원가입 되었습니다!");
        } else {
          alert("회원가입에 실패했습니다");
          clearInput();
        }
      });
    } else {
      alert("패스워드가 일치하지 않습니다");
      clearInput();
    }
  };

  return (
    <div className="signup">
      <h1>회원가입</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="signup-email">이메일*</label>
        <input
          type="email"
          name="email"
          id="signup-email"
          placeholder="ID@example.com"
          required
          ref={emailInput}
        />

        <label htmlFor="signup-password">비밀번호*</label>
        <input
          type="password"
          name="password"
          id="signup-password"
          placeholder="영문, 숫자, 특수문자 조합 8~20자"
          required
          ref={passwordInput}
        />

        <label htmlFor="signup-password">비밀번호 확인*</label>
        <input
          type="password"
          name="password-confirm"
          id="signup-password-confirm"
          placeholder="비밀번호를 한번 더 입력해주세요."
          required
          ref={passwordConfirmInput}
        />

        <label htmlFor="user_consent">
          <input
            type="checkbox"
            name="user_consent"
            id="user_consent"
            ref={consentInput}
          />
          전체 약관 동의
        </label>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SignUp);
