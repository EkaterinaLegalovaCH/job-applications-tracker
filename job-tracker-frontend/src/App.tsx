import React, { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./layouts/homepage/HomePage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ApplicationsDashboardPage } from "./layouts/applicationsDashboardPage/ApplicationsDashboardPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { ApplicationCheckoutPage } from "./layouts/ApplicationCheckoutPage/ApplicationCheckoutPage";


export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/applications">
            <ApplicationsDashboardPage />
          </Route>

          <Route path="/checkout/:applicationId">
            <ApplicationCheckoutPage />
          </Route>

          
          
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
