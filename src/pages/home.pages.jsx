import React from "react";

import "../scss/page.styles.scss";

import Header from "../components/header";
import Slider from "../components/slider";
import CityPreview from "../components/city-preview";
import TourPreview from "../components/tour-preview";
import TicketPreview from "../components/ticket-preview";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <Slider />
      <CityPreview />
      <TourPreview />
      <TicketPreview />
      <Footer />
    </div>
  );
};

export default HomePage;
