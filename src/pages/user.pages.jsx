import React from "react";
import { connect } from "react-redux";

import SignIn from "../components/signin";
import SignUp from "../components/signup";
import LikedProducts from "../components/likedProducts";
import DashBoard from "../components/dashboard";

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pathname: ""
    };
  }

  componentDidMount() {
    this.setState({ pathname: this.props.pathname });
  }

  componentDidUpdate() {
    if (this.props.pathname !== this.state.pathname)
      this.setState({ pathname: this.props.pathname });
  }

  conditionalRender() {
    switch (this.state.pathname) {
      case "likes":
        return <LikedProducts />;
      case "signup":
        return (
          <>
            <SignIn />
            <SignUp />
          </>
        );
      case "signin":
        return (
          <>
            <SignIn />
            <SignUp />
          </>
        );
      case "dashboard":
        return <DashBoard />;
      default:
        return null;
    }
  }

  render() {
    return <div className="user-container">{this.conditionalRender()}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(UserPage);
