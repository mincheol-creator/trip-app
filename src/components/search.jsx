import React from "react";

import "../scss/styles.scss";

const Search = () => {
  return (
    <div className="search">
      <label htmlFor="search-input">어디로 떠나세요?</label>
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
