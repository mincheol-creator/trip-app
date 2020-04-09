import React from "react";
import { connect } from "react-redux";

import "../scss/styles.scss";

import API from "../API";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {
        id: 3,
        name: "런던 시내 워킹 투어",
        description:
          "단순한 흥미위주의 관광이 아닌, 역사적으로 좀 더 깊고 실질적으로 영국을 알아가는 현지/문화/체험투어",
        start_date: "2020-02-07",
        end_date: "2020-02-07",
        available_start_date: "2020-01-01",
        available_end_date: "2020-03-30",
        adult_price: 35000,
        youth_price: 30000,
        location: "England SW1A 0AA London",
        photo: "/img/london-header.jpg",
        category: "tour",
        city: "London",
        country: "England",
        createdAt: ""
      }, // 화면 랜더링 될 때 배치하는 상품 정보
      pickedDate: "", // 예약할 때 선택해야하는 옵션 날짜
      adultCount: "", // 예약할 때 선택해야하는 성인 수
      youthCount: "", // 예약할 때 선택해야하는 어린이 수
      likedCount: 30 // 찜 목록에 몇개나 있는지
    };
  }

  componentDidMount() {
    // 찜목록 DB돌고 이 상품이 찜목록에 몇개나 들어가있는지 카운트
    //   const id = "1";
    //   API.selectProduct(id).then(response => {
    //     if (response.data.message) {
    //       alert("조회 되었습니다!");
    //       this.setState({
    //         productData: response.data.productData
    //       });
    //     } else {
    //       alert("조회 실패했습니다");
    //     }
    //   });
  }

  currencyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  handleDateChange = e => {
    console.log(e.target.value);
    this.setState({
      pickedDate: e.target.value
    });
  };

  handleLikeBtn = event => {
    event.preventDefault();
    alert(`${this.state.productData.id} 상품이 찜 목록에 추가되었습니다.`);
  };

  render() {
    const {
      id,
      name,
      description,
      start_date,
      end_date,
      available_start_date,
      available_end_date,
      adult_price,
      youth_price,
      location,
      photo,
      category,
      city,
      country
    } = this.state.productData;
    return (
      <div className="product">
        <section className="product-main">
          <header className="product-main__title">🇬🇧 {name}</header>

          <div className="product-main__picture">
            <img src={photo} alt={name} />
          </div>

          <div className="product-main__options">
            <div className="product-main__options-header">
              날짜와 옵션을 선택하세요
            </div>
            <input
              type="date"
              id="option-date"
              // name="trip-start"
              // value="2018-07-22"
              min="2020-01-01"
              max="2040-12-31"
              onChange={this.handleDateChange}
            />
            <label htmlFor="">성인</label>
            <input type="number" name="" id="" />
            <label htmlFor="">어린이</label>
            <input type="number" name="" id="" />
          </div>

          <div className="product-main__desc">
            <div className="product-main__desc-header">투어 소개</div>
            <div> {description}</div>
          </div>

          <div className="product-main__meeting-location">
            <div className="product-main__meeting-location-header">
              만나는 장소
            </div>
            <div>{location}</div>
          </div>

          <div className="product-main__meeting-time">
            <div className="product-main__meeting-time-header">만나는 시간</div>
          </div>
        </section>

        <aside className="product-side">
          <div className="product-side__price">
            {this.currencyFormat(adult_price)}원
          </div>
          <div className="product-side__info">
            <p>예약 가능한 가장 빠른 날짜: 2020년 4월 9일</p>
            <p>24시간 이내 확정</p>
          </div>
          <div className="product-side__buttons">
            <button onClick={API.kakaopayPurchase}>구매하기</button>
            <button onClick={this.handleLikeBtn}>❤️ 찜 목록에 넣기</button>
            <div className="likes-content">
              <span>{this.state.likedCount}</span>명이 찜 목록에 담았습니다
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(ProductPage);
