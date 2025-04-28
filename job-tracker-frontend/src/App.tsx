import React, { useEffect ,useState } from "react";
import "./App.css";
import { HomePage } from "./layouts/homepage/HomePage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ApplicationsDashboardPage } from "./layouts/applicationsDashboardPage/ApplicationsDashboardPage";
import { Route, Switch } from "react-router-dom";

export const App = () => {
  return (
        <>
          <Navbar/>
          <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          
          <Route path='/applications'>
            <ApplicationsDashboardPage />
          </Route>
          </Switch>
          

          <Footer/>
    </>
  );
}

