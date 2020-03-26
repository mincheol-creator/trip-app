import React from "react";

import "../scss/component.styles.scss";
import CityButton from "./city-button";

const cities = ["런던", "파리", "말라카", "서울", "인터라켄"];

const CityPreview = () => {
  return (
    <div className="city-preview">
      {cities.map(city => (
        <CityButton name={city} />
      ))}
    </div>
  );
};

export default CityPreview;
