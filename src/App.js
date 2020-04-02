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
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/user">
          <Header />
          <UserPage />
        </Route>

        <Route path="/product/:id">
          <Header />
          <ProductPage />
        </Route>

        <Route path="/city/:name">
          <Header />
          <CityPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
