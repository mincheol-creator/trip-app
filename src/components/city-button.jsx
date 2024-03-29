import React from "react";

import "../scss/styles.scss";

const CityButton = (props) => {
  const handleClick = () => {
    window.location.href = `/city/${props.data.name_eng}`;
  };

  return (
    <div
      className="city-button"
      onClick={handleClick}
      style={{
        backgroundImage: `url("http://70.12.227.32:8181/image/${props.data.image}")`,
      }}
    >
      <span className="city-button__name">{props.data.name_kor}</span>
    </div>
  );
};

export default CityButton;
