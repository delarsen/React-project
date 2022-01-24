import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
import ReportFoundPetPage from "./report-found-pet";
import ReportLostPetPage from "./report-lost-pet";
import ViewPetsPage from "./view-pets";
import ViewFoundPetsPage from "./viewfoundpets";
import ViewLostPetsPage from "./viewlostpets";
import PetCards from "./viewlostpets/pet-cards";
import PetsInfoPage from "./pets-info-page";
import PetPage from "./pet-page";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reportfoundpet" element={<ReportFoundPetPage />} />
            <Route path="/reportlostpet" element={<ReportLostPetPage />} />
            <Route path="/viewpets" element={<ViewPetsPage />} />
            <Route path="/viewfoundpets" element={<ViewFoundPetsPage />} />
            <Route path="/viewlostpets" element={<ViewLostPetsPage />} />
            <Route
              path={`/viewlostpets/:id`}
              element={<PetPage type="lost" />}
            />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}
