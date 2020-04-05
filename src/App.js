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

        <Route exact path="/user/signup">
          <Header />
          <UserPage pathname="signup" />
        </Route>

        <Route exact path="/user/likes">
          <Header />
          <UserPage pathname="likes" />
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
