import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./pages/main-page";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ReportFoundPetPage from "./report-found-pet";
import ReportLostPetPage from "./report-lost-pet";
import ViewPetsPage from "./view-pets";
import ViewFoundPetsPage from "./viewfoundpets";
import ViewLostPetsPage from "./viewlostpets";
import PetPage from "./pet-page";
import RequiredPage from "./required-page";

import ProfilePage from "./profile";
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
            <Route
              path={`/viewfoundpets/:id`}
              element={<PetPage type="found" />}
            />
            <Route path="/loginrequired" element={<RequiredPage />} />
            <Route path={`/account`} element={<ProfilePage />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}
