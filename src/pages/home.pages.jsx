import React from "react";

import "../scss/styles.scss";

import Search from "../components/search";
import CityPreview from "../components/city-preview";
import TourPreview from "../components/tour-preview";
import TicketPreview from "../components/ticket-preview";
import Footer from "../components/footer";
import API from "../API";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      city: [],
      tour: [],
      ticket: []
    };
  }
  componentDidMount() {
    // API.getPreview().then(response =>
    //   this.setState({
    //     city: response.data.city,
    //     tour: response.data.tour,
    //     ticket: response.data.ticket
    //   })
    // );
  }

  render() {
    const { city, tour, ticket } = this.state;
    return (
      <div className="home-container">
        <Search />
        <CityPreview city={city} />
        <TourPreview tour={tour} />
        <TicketPreview ticket={ticket} />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
