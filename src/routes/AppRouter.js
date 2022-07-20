import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Login } from "../pages/Login";
import { Orders } from "../pages/Orders";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/products">
          <Products />
        </PrivateRoute>
        <PrivateRoute path="/cart">
          <Cart />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
