import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./scss/App.scss";

import Header from "./components/header";
import HomePage from "./pages/home.pages";
import UserPage from "./pages/user.pages";
import ProductPage from "./pages/product.pages";
import CityPage from "./pages/city.pages";
import Footer from "./components/footer";

import Cookies from "universal-cookie";

import store from "../src/redux/store";
import addCustomer from "../src/redux/customer/customer.action";

const cookies = new Cookies();

function App() {
  React.useEffect(() => {
    console.log(cookies.get("loggedIn"));
    if (cookies.get("loggedIn")) {
      store.dispatch(
        addCustomer({
          isLoggedIn: true
        })
      );
    } else {
      store.dispatch(
        addCustomer({
          isLoggedIn: false
        })
      );
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/user/signup">
          <Header />
          <UserPage pathname="signup" />
          <Footer />
        </Route>

        <Route exact path="/user/likes">
          <Header />
          <UserPage pathname="likes" />
          <Footer />
        </Route>

        <Route exact path="/user/dashboard">
          <Header />
          <UserPage pathname="dashboard" />
          <Footer />
        </Route>

        <Route path="/product/:id">
          <Header />
          <ProductPage />
          <Footer />
        </Route>

        <Route path="/city/:name">
          <Header />
          <CityPage />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(App);
