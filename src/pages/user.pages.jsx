import React from "react";

import SignIn from "../components/signin";
import SignUp from "../components/signup";

class UserPage extends React.Component {
  render() {
    return (
      <div className="user-container">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
export default UserPage;
