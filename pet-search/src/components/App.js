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

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-content">
          <Router basename="/">
            <ul>
              <li>
                <Link to="/login">Home</Link>
              </li>
            </ul>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/login" component={Home} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reportfoundpet" element={<ReportFoundPetPage />} />
            <Route path="/reportlostpet" element={<ReportLostPetPage />} />
            <Route path="/viewpets" element={<ViewPetsPage />} />
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}
