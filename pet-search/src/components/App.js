import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainPage />
        <Footer />
      </>
    );
  }
}
