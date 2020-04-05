import React from "react";

import "../scss/styles.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search-title">
        <div className="search-title__main">YOUR TRIP TO THE NEW WORLD</div>
        <div className="search-title__sub">
          모두의 여행과 함께 당신의 다음 여행을 준비하세요!
        </div>
      </div>
      <input
        type="text"
        id="search-input"
        className="search-input"
        placeholder="✈️ 가고 싶은 나라나 도시를 말해주세요!"
      />
    </div>
  );
};

export default Search;
