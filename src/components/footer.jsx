import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top__services">
          <h3>고객센터</h3>
          <section>3488-8282</section>
          <div>
            일반 문의 09:00-22:00 / 실시간 항공권 문의 09:00-18:00 연중무휴 /
            점심 12:00-13:00
          </div>
          <button>실시간 채팅 상담</button>
          <button>1:1 문의</button>
        </div>
        <div className="footer-top__sitemap">
          <div className="footer-top__sitemap-01">
            <h4>소개</h4>
            <ul>
              <li>회사소개</li>
              <li>채용</li>
              <li>모두의 여행 팀</li>
            </ul>
          </div>
          <div className="footer-top__sitemap-02">
            <h4>파트너</h4>
            <ul>
              <li>파트너 등록하기</li>
              <li>파트너 프로그램</li>
              <li>티켓 제휴</li>
              <li>가이드 등록 문의</li>
            </ul>
          </div>
          <div className="footer-top__sitemap-03">
            <h4>지원</h4>
            <ul>
              <li>자주 묻는 질문</li>
              <li>최저가 보상제</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
