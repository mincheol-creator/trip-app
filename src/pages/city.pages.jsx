import React from "react";
import { connect } from "react-redux";

import ProductCard from "../components/product-card";

import "../scss/styles.scss";

import API from "../API";

class CityPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: window.location.pathname.split("/")[2],
      cityData: null,
      tourData: null,
      ticketData: null
    };
  }

  async componentDidMount() {
    let sendCityName = this.state.cityName;
    await API.getCityDetailPreview(sendCityName).then(response => {
      this.setState({
        cityData: response.data.cityMessage,
        tourData: response.data.tourMessage,
        ticketData: response.data.ticketMessage
      });
    });

    // city tour 랑 ticket 정보 불러오기
    // API.getCityData(cityName) 으로, 컴포넌트 마운트 되면서 넘어온 url string으로 도시 구분해서 데이터 받아서 랜더링
  }

  render() {
    const cityData = this.state.cityData;
    const tourData = this.state.tourData;
    const ticketData = this.state.ticketData;
    console.log(cityData);
    console.log(tourData);
    console.log(ticketData);
    return (
      <section className="city">
        {this.state.cityData && this.state.tourData && this.state.ticketData ? (
          <>
            <div
              className="city-header"
              style={{
                backgroundImage: `url("http://${process.env.REACT_APP_SERVER_URL}/image/${cityData.image}")`
              }}
            >
              <div className="city-header__name">
                <div className="city-header__name-main">
                  {cityData.name_kor}
                </div>
                <div className="city-header__name-sub">
                  {cityData.name_eng}, {cityData.country}
                </div>
              </div>
            </div>

            <div className="city-desc">
              <div className="city-desc__title city__title">
                🛫 모두의 여행과 함께 가는 {cityData.name_kor}!
              </div>
              <div className="city-desc__content">
                <div className="city-desc__description"> {cityData.desc}</div>
                <div className="city-desc__map">
                  {/* <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${cityData.name_eng}&zoom=14&size=250x250&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    alt="City google map"
                  /> */}
                </div>
              </div>
            </div>

            <div className="city-tour">
              <div className="city__title">
                🚩 {cityData.name_kor} 가이드 투어
              </div>
              <div className="city__list">
                {tourData.map(tourData => (
                  <ProductCard key={tourData.id} data={tourData} />
                ))}
              </div>
            </div>

            <div className="city-ticket">
              <div className="city__title">🎫 {cityData.name_kor} 티켓</div>
              <div className="city__list">
                {ticketData.map(ticketData => (
                  <ProductCard key={ticketData.id} data={ticketData} />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(CityPage);
