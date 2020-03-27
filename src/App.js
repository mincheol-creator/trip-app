import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

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
          <UserPage />
        </Route>

        <Route path="/product/:id">
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
