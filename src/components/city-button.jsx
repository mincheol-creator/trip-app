import React from "react";

import "../scss/styles.scss";

const CityButton = props => {
  const handleClick = () => {
    window.location.href = `/city/${props.data.name_eng}`;
  };

  return (
    <div className="city-button" onClick={handleClick}>
      <span className="city-button__name">{props.data.name_kor}</span>
    </div>
  );
};

export default CityButton;
