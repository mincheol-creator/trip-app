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
      city: [],
      tour: null,
      ticket: null,
    };
  }

  async componentDidMount() {
    await API.getTourPreview().then((response) => {
      console.log(response);
      //const tourTour = response.data.message;
      /*  const tourList = tourTour.map((item,i)=>{
        return(
          id: 3,
          name: {item.name}
        );
      }) */

      this.setState({
        /*  city: response.data.city, */
        tour: response.data.message,
        /* ticket: response.data.ticket, */
      });
    });

    await API.getTicketPreview().then((response) => {
      //const tourTour = response.data.message;
      /*  const tourList = tourTour.map((item,i)=>{
        return(
          id: 3,
          name: {item.name}
        );
      }) */

      this.setState({
        /*  city: response.data.city, */
        ticket: response.data.message,
        /* ticket: response.data.ticket, */
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
        {this.state.tour && this.state.ticket ? (
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
