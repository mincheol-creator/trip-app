import React from "react";

import "../scss/styles.scss";

const CityButton = props => {
  const handleClick = () => {
    alert("이 기능은 추후 업데이트 될 예정입니다");
  };

  return (
    <div className="city-button" onClick={handleClick}>
      <span className="city-button__name">{props.name}</span>
    </div>
  );
};

export default CityButton;
