import React from "react";
import { connect } from "react-redux";

import ProductCard from "../components/product-card";

import "../scss/styles.scss";

class CityPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // dummy data
      cityData: {
        name_kor: "런던",
        name_eng: "London",
        country: "United Kingdom",
        desc:
          "빅벤, 런던 아이, 빨간 공중전화 부스 등 상징적인 랜드마크로 유명한 런던은 현대적인 면모와 오랜 역사를 모두 갖춘 도시입니다. 흐린 날씨에도 불구하고 런던은 늘 유행을 선도하는 도시이자 맛있는 음식의 천국, 예술의 중심지로 사랑받아 왔습니다. 버킹엄 궁전을 방문해서 케임브리지 공작 윌리엄 왕자와 공작부인 캐서린 왕세자빈이 입 맞춘 유명한 발코니도 보고 넓게 펼쳐진 공원을 산책해보세요. 해러즈나 프라이마크와 같은 유명 런던 백화점과 쇼핑몰에서 기분 좋게 쇼핑하는 것도 좋아요. 유명 인사들이 결혼식을 올린 웨스트민스터 사원을 방문하는 것도 잊지 마세요!"
      },
      tourData: [
        {
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
          photo: "/img/london-01.jpg",
          category: "tour",
          city: "London",
          country: "England",
          createdAt: ""
        }
      ],
      ticketData: [
        {
          id: 4,
          name: "런던 해리포터 스튜디오 입장권",
          description: "황홀한 해리포터 마법의 세계로 떠나요~!!",
          start_date: "2020-02-17",
          end_date: "2020-02-17",
          available_start_date: "2020-01-01",
          available_end_date: "2020-07-30",
          adult_price: 70000,
          youth_price: 60000,
          location: "Studio Tour Dr, Leavesden, Watford WD25 7LR England",
          photo: "/img/hp-studio.jpg",
          category: "ticket",
          city: "London",
          country: "England",
          createdAt: ""
        }
      ]
    };
  }

  componentDidMount() {
    let pathArray = window.location.pathname.split("/");
    console.log(pathArray[2]);
    // city tour 랑 ticket 정보 불러오기
    // API.getCityData(cityName) 으로, 컴포넌트 마운트 되면서 넘어온 url string으로 도시 구분해서 데이터 받아서 랜더링
  }

  render() {
    const { name_kor, name_eng, country, desc } = this.state.cityData;
    return (
      <section className="city">
        <div
          className="city-header"
          style={{ backgroundImage: `url("/img/london-header.jpg")` }}
        >
          <div className="city-header__name">
            <div className="city-header__name-main">{name_kor}</div>
            <div className="city-header__name-sub">
              {name_eng}, {country}
            </div>
          </div>
        </div>

        <div className="city-desc">
          <div className="city-desc__title city__title">
            🛫 모두의 여행과 함께 가는 {name_kor}!
          </div>
          <div className="city-desc__content">
            <div className="city-desc__description"> {desc}</div>
            <div className="city-desc__map">
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=14&size=250x250&key=APIKEY"
                alt="City google map"
              />
            </div>
          </div>
        </div>

        <div className="city-tour">
          <div className="city__title">🚩 {name_kor} 가이드 투어</div>
          <div className="city__list">
            <ProductCard data={this.state.tourData[0]} />
            <ProductCard data={this.state.tourData[0]} />
            <ProductCard data={this.state.tourData[0]} />
            <ProductCard data={this.state.tourData[0]} />
          </div>
        </div>

        <div className="city-ticket">
          <div className="city__title">🎫 {name_kor} 티켓</div>
          <div className="city__list">
            <ProductCard data={this.state.ticketData[0]} />
            <ProductCard data={this.state.ticketData[0]} />
            <ProductCard data={this.state.ticketData[0]} />
            <ProductCard data={this.state.ticketData[0]} />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(CityPage);
