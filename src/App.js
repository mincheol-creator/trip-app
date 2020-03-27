import React from "react";
import { Switch, Route } from "react-router-dom";
import "./scss/App.scss";

import Header from "./components/header";
import HomePage from "./pages/home.pages";
import UserPage from "./pages/user.pages";
import ProductPage from "./pages/product.pages";
import CityPage from "./pages/city.pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/user">
          <UserPage />
        </Route>

        <Route path="/product">
          <ProductPage />
        </Route>

        <Route path="/city/:name">
          <CityPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
