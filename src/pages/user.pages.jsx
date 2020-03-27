import React from "react";

import SignIn from "../components/signin";
import SignUp from "../components/signup";

const UserPage = () => {
  return (
    <div className="user-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default UserPage;
