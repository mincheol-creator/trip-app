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
      tour: [
        {
          id: 3,
          name: "런던 시내 워킹 투어",
          description:
            "단순한 흥미위주의 관광이 아닌, 역사적으로 좀 더 깊고 실질적으로 영국을 알아가는 현지/문화/체험투어",
          start_date: "2020-02-07",
          end_date: "2020-02-07",
          available_start_date: "2020-01-01",
          available_end_date: "2020-03-30",
          adult_price: 35000,
          youth_price: 30000,
          location: "England SW1A 0AA London",
          photo: "/img/london-header.jpg",
          category: "tour",
          city: "London",
          country: "England",
          createdAt: ""
        }
      ],
      ticket: [
        {
          id: 4,
          name: "런던 해리포터 스튜디오 입장권",
          description: "황홀한 해리포터 마법의 세계로 떠나요~!!",
          start_date: "2020-02-17",
          end_date: "2020-02-17",
          available_start_date: "2020-01-01",
          available_end_date: "2020-07-30",
          adult_price: 70000,
          youth_price: 60000,
          location: "Studio Tour Dr, Leavesden, Watford WD25 7LR England",
          photo: "/img/hp-studio.jpg",
          category: "ticket",
          city: "London",
          country: "England",
          createdAt: ""
        }
      ]
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
        <div className="header-wrapper">
          <Header />
          <Search />
        </div>
        <CityPreview city={city} />
        <TourPreview tour={tour} />
        <TicketPreview ticket={ticket} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(HomePage);
