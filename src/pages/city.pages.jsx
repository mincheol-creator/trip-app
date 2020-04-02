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
      }
    };
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
        {/* <div className="city-desc">{desc}</div> */}
        <section className="city-tour">
          <div className="city-tour__title">가이드 투어</div>
          <div className="city-tour__list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
        <section className="city-ticket">
          <div className="city-ticket__title">티켓</div>
          <div className="city-ticket__list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    );
  }
}

export default CityPage;
