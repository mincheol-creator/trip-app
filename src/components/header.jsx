import React from "react";

import Navigation from "../components/navigation";

const Header = props => {
  return (
    <div className="header">
      <div className="header-logo">VOYAGE</div>
      <Navigation />
    </div>
  );
};

export default Header;
