import React from "react";

import "../scss/styles.scss";

import Search from "../components/search";
import CityPreview from "../components/city-preview";
import TourPreview from "../components/tour-preview";
import TicketPreview from "../components/ticket-preview";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="home-container">
      <Search />
      <CityPreview />
      <TourPreview />
      <TicketPreview />
      <Footer />
    </div>
  );
};

export default HomePage;
