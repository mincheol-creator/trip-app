import React from "react";

import "../scss/styles.scss";
import CityButton from "./city-button";

const cityData = [
  {
    name_kor: "런던",
    name_eng: "London",
    country: "United Kingdom",
    desc:
      "빅벤, 런던 아이, 빨간 공중전화 부스 등 상징적인 랜드마크로 유명한 런던은 현대적인 면모와 오랜 역사를 모두 갖춘 도시입니다. 흐린 날씨에도 불구하고 런던은 늘 유행을 선도하는 도시이자 맛있는 음식의 천국, 예술의 중심지로 사랑받아 왔습니다. 버킹엄 궁전을 방문해서 케임브리지 공작 윌리엄 왕자와 공작부인 캐서린 왕세자빈이 입 맞춘 유명한 발코니도 보고 넓게 펼쳐진 공원을 산책해보세요. 해러즈나 프라이마크와 같은 유명 런던 백화점과 쇼핑몰에서 기분 좋게 쇼핑하는 것도 좋아요. 유명 인사들이 결혼식을 올린 웨스트민스터 사원을 방문하는 것도 잊지 마세요!"
  }
];

const CityPreview = props => {
  return (
    <div className="city-preview">
      {cityData.map(city => (
        <CityButton data={city} />
      ))}
    </div>
  );
};

export default CityPreview;
