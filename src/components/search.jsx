import React from "react";

import "../scss/styles.scss";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="search-form"
        placeholder="어디로 떠나세요?"
      />
    </div>
  );
};

export default Search;
