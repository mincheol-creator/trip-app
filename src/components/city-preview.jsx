import React from "react";

import "../scss/styles.scss";
import CityButton from "./city-button";
/* 
const cityData = [
  {
    id: 0,
    name_kor: "런던",
    name_eng: "London",
    image: "/img/london-01.jpg"
  },
  {
    id: 1,
    name_kor: "파리",
    name_eng: "Paris",
    image: "/img/paris-header.jpg"
  },
  {
    id: 2,
    name_kor: "코타키나발루",
    name_eng: "Kota Kinabalu",
    image: "/img/bg.jpg"
  },
  {
    id: 3,
    name_kor: "바르셀로나",
    name_eng: "Barcelona",
    image: "/img/barcelona.jpg"
  },
  {
    id: 4,
    name_kor: "인터라켄",
    name_eng: "Interlaken",
    image: "/img/alps.jpg"
  }
];
 */
const CityPreview = ({ city }) => {
  return (
    <div className="city-preview">
      <header className="city-preview__title">
        <div className="city-preview__title-main">🏰 인기 여행지</div>
        <div className="city-preview__title-sub">
          모두의 여행이 추천하는 여행지!
        </div>
      </header>
      <div className="city-preview__list">
        {city.map((city) => (
          <CityButton key={city.id + city.name_eng} data={city} />
        ))}
      </div>
    </div>
  );
};

export default CityPreview;
