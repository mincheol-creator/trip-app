import React from "react";
import { connect } from "react-redux";

import "../scss/styles.scss";

import API from "../API";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      productID: window.location.pathname.split("/")[2],
      productData: null /* {
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
        createdAt: "",
      },  */, // 화면 랜더링 될 때 배치하는 상품 정보
      pickedDate: "", // 예약할 때 선택해야하는 옵션 날짜
      adultCount: 0, // 예약할 때 선택해야하는 성인 수
      youthCount: 0, // 예약할 때 선택해야하는 어린이 수
      likedCount: 30, // 찜 목록에 몇개나 있는지
      totalPrice: 0
    };
  }

  async componentDidMount() {
    // 찜목록 DB돌고 이 상품이 찜목록에 몇개나 들어가있는지 카운트
    let sendProductID = this.state.productID;
    await API.selectProduct(sendProductID).then(response => {
      this.setState({
        productData: response.data.Message
      });
    });
  }

  currencyFormat(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  priceCalculate(quantity, price) {
    return quantity * 1 * (price * 1);
  }

  handleDateChange = e => {
    this.setState({
      pickedDate: e.target.value
    });
  };

  handleLikeBtn = event => {
    event.preventDefault();
    if (!this.props.customer.isLoggedIn) {
      alert("로그인 해주세요.");
      window.location.href = "/user/signup";
    } else {
      API.addLikes(this.state.productData.id).then(response => {
        if (response.data.message) {
          alert("찜 목록에 추가되었습니다.");
        } else {
          alert("찜하기 실패 ㅠㅠ");
        }
      });
    }
  };

  handleQuantityChange = () => {
    const totalPrice =
      this.priceCalculate(
        this.state.adultCount,
        this.state.productData.adult_price
      ) +
      this.priceCalculate(
        this.state.youthCount,
        this.state.productData.youth_price
      );
    this.setState({ totalPrice });
  };

  render() {
    const productData = this.state.productData;

    return (
      <div className="product">
        {this.state.productData ? (
          <>
            <section className="product-main">
              <header className="product-main__title">
                🇬🇧 {productData.name}
              </header>

              <div className="product-main__picture">
                <img
                  src={`http://${process.env.REACT_APP_SERVER_URL}/image/${productData.photo}`}
                  alt={productData.name}
                />
              </div>

              <div className="product-main__options">
                <div className="product-main__options-header">
                  날짜와 옵션을 선택하세요
                </div>
                <input
                  type="date"
                  id="option-date"
                  min="2020-01-01"
                  max="2040-12-31"
                  onChange={this.handleDateChange}
                />
                <label htmlFor="">성 인</label>
                <input
                  type="number"
                  name=""
                  id="adult-quantity-input"
                  min="0"
                  value={this.state.adultCount}
                  ref={ref => (this._adultInput = ref)}
                  onChange={e =>
                    this.setState({ adultCount: e.target.value }, () =>
                      this.handleQuantityChange()
                    )
                  }
                />
                <div className="adult-quantity">
                  {this.currencyFormat(
                    this.priceCalculate(
                      this.state.adultCount,
                      this.state.productData.adult_price
                    )
                  )}
                </div>

                <br></br>

                <label htmlFor="">어린이</label>
                <input
                  type="number"
                  name=""
                  id="youth-quantity-input"
                  value={this.state.youthCount}
                  min="0"
                  onChange={e =>
                    this.setState({ youthCount: e.target.value }, () =>
                      this.handleQuantityChange()
                    )
                  }
                />
                <div className="youth-quantity">
                  {this.currencyFormat(
                    this.priceCalculate(
                      this.state.youthCount,
                      this.state.productData.youth_price
                    )
                  )}
                </div>
              </div>

              <div className="product-main__desc">
                <div className="product-main__desc-header">투어 소개</div>
                <div> {productData.description}</div>
              </div>

              <div className="product-main__meeting-location">
                <div className="product-main__meeting-location-header">
                  만나는 장소
                </div>
                <div>{productData.location}</div>
              </div>

              <div className="product-main__meeting-time">
                <div className="product-main__meeting-time-header">
                  만나는 시간
                </div>
              </div>
            </section>

            <aside className="product-side">
              <div className="product-side__price">
                {this.currencyFormat(productData.adult_price)}원
              </div>
              <div className="product-side__info">
                {/* <p>예약 가능한 가장 빠른 날짜: 2020년 4월 10일</p> */}
                <p>24시간 이내 확정</p>
              </div>
              <div className="product-side__totalPrice">
                총 금액 : {this.currencyFormat(this.state.totalPrice)}원
              </div>
              <div className="product-side__buttons">
                <button
                  onClick={() => {
                    if (this.state.totalPrice === 0) {
                      this._adultInput.focus();
                    } else {
                      return API.kakaopayPurchase(
                        productData.name,
                        this.state.totalPrice,
                        this.state.adultCount * 1 + this.state.youthCount * 1,
                        productData.id
                      );
                    }
                  }}
                >
                  구매하기
                </button>
                <button onClick={this.handleLikeBtn}>❤️ 찜 목록에 넣기</button>
                <div className="likes-content">
                  <span>{this.state.likedCount}</span>명이 찜 목록에 담았습니다
                </div>
              </div>
            </aside>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(ProductPage);
