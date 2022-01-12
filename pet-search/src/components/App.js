import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
import ReportFoundPetPage from "./report-found-pet";
import ReportLostPetPage from "./report-lost-pet";
import ViewPetsPage from "./view-pets";
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-content">
          <HashRouter basename="/joonline">
            <Routes>
              <Route exact path="/" component={<MainPage />} />
              <Route path="/login" component={<LoginPage />} />
              <Route path="/register" component={<RegisterPage />} />
              <Route
                path="/reportfoundpet"
                component={<ReportFoundPetPage />}
              />
              <Route path="/reportlostpet" component={<ReportLostPetPage />} />
              <Route path="/viewpets" component={<ViewPetsPage />} />
            </Routes>
          </HashRouter>
        </div>
        <Footer />
      </>
    );
  }
}
