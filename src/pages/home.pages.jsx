import React from "react";
import { connect } from "react-redux";

import "../scss/styles.scss";

import Header from "../components/header";
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
      city: null,
      tour: null,
      ticket: null,
    };
  }

  async componentDidMount() {
    await API.getCityPreview().then((response) => {
      this.setState({
        city: response.data.message,
      });
    });

    await API.getTourPreview().then((response) => {
      this.setState({
        tour: response.data.message,
      });
    });

    await API.getTicketPreview().then((response) => {
      this.setState({
        ticket: response.data.message,
      });
    });
  }

  render() {
    return (
      <div className="home-container">
        <div className="header-wrapper">
          <Header />
          <Search />
        </div>
        {this.state.city && this.state.tour && this.state.ticket ? (
          <>
            <CityPreview city={this.state.city} />
            <TourPreview tour={this.state.tour} />
            <TicketPreview ticket={this.state.ticket} />
          </>
        ) : null}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(HomePage);
