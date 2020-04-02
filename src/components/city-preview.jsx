import React from "react";

import "../scss/styles.scss";
import CityButton from "./city-button";

const cities = ["런던", "파리", "코타키나발루", "바르셀로나", "인터라켄"];

const CityPreview = props => {
  return (
    <div className="city-preview">
      {cities.map(city => (
        <CityButton name={city} />
      ))}
    </div>
  );
};

export default CityPreview;
