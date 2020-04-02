import React from "react";

class CityPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // dummy data
      cityData: {
        name: "London",
        desc: "There's no place like London! 🇬🇧"
      }
    };
  }

  render() {
    const { name, desc } = this.state.cityData;
    return (
      <div className="city">
        <div className="city-name">{name}</div>
        <div className="city-desc">{desc}</div>
        <div className="city-tourList"></div>
        <div className="city-ticketList"></div>
      </div>
    );
  }
}

export default CityPage;
