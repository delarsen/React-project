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
          <HashRouter>
            <Routes>
              <Route path="/" component={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/reportfoundpet" element={<ReportFoundPetPage />} />
              <Route path="/reportlostpet" element={<ReportLostPetPage />} />
              <Route path="/viewpets" element={<ViewPetsPage />} />
            </Routes>
          </HashRouter>
        </div>
        <Footer />
      </>
    );
  }
}
