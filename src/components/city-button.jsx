import React from "react";

import "../scss/styles.scss";

const CityButton = (props) => {
  console.log(props);
  const handleClick = () => {
    console.log(window.location.href);
    window.location.href = `/city/${props.data.name_eng}`;
  };

  return (
    <div
      className="city-button"
      onClick={handleClick}
      style={{
        backgroundImage: `url("http://${process.env.REACT_APP_SERVER_URL}/image/${props.data.image}")`,
      }}
    >
      <span className="city-button__name">{props.data.name_kor}</span>
    </div>
  );
};

export default CityButton;
