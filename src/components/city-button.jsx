import React from "react";

import "../scss/component.styles.scss";

const CityButton = props => {
  return (
    <div className="city-button">
      <span className="city-button__name">{props.name}</span>
    </div>
  );
};

export default CityButton;
