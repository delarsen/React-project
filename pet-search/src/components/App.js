import React, { Component } from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import MainPage from "./pages/main-page";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ReportFoundPetPage from "./pages/report-found-pet-page";
import ReportLostPetPage from "./pages/report-lost-pet-page";
import ViewPetsPage from "./pages/view-pets-page";
import ViewFoundPetsPage from "./pages/view-pets-page/viewfoundpets";
import ViewLostPetsPage from "./pages/view-pets-page/viewlostpets";
import PetPage from "./pages/pet-page";
import RequiredPage from "./pages/required-page";
import ProfilePage from "./pages/profile-page";

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
