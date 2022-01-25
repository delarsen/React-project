import React, { Component } from "react";
import Header from "../header";
import RouteButtons from "./route-buttons";
import MainPageSlider from "./slider";

export default class MainPage extends Component {
  render() {
    return (
      <div className="mb-20 ">
        <MainPageSlider />
        <RouteButtons />
      </div>
    );
  }
}
