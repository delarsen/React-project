import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-content">
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}
