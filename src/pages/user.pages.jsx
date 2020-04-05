import React from "react";

import SignIn from "../components/signin";
import SignUp from "../components/signup";
import LikedProducts from "../components/likedProducts";

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

  render() {
    return (
      <div className="user-container">
        {this.state.pathname === "likes" ? (
          <LikedProducts />
        ) : (
          <>
            <SignIn />
            <SignUp />
          </>
        )}
      </div>
    );
  }
}
export default UserPage;
