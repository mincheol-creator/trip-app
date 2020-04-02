import React from "react";

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
          "There's no place like London! 🇬🇧 Fuga quasi enim molestiae ipsam et est ea praesentium. Ex eos corrupti dolores ut exercitationem quasi qui. Nisi quod eos facilis illum. Id quasi non quod et eius accusantium. Omnis mollitia nihil quia aut."
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
          photo: "https://picsum.photos/200/300",
          category: "tour",
          city: "London",
          country: "England",
          createdAt: ""
        }
      ]
    };
  }

  componentDidMount() {
    // city tour 랑 ticket 정보 불러오기
  }

  render() {
    const { name_kor, name_eng, country, desc } = this.state.cityData;
    return (
      <div className="city">
        <section className="city-header">
          <div className="city-header__name">
            <div className="city-header__name-main">{name_kor}</div>
            <div className="city-header__name-sub">
              {name_eng}, {country}
            </div>
          </div>
        </section>
        <div className="city-desc">{desc}</div>
        <section className="city-tour">
          <div className="city-tour__title">🚩{name_kor} 가이드 투어</div>
          <div className="city-tour__list">
            <ProductCard tourData={this.state.tourData[0]} />
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </section>
        <section className="city-ticket">
          <div className="city-ticket__title">🎫{name_kor} 티켓</div>
          <div className="city-ticket__list">
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default CityPage;
