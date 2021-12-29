import React, { Component } from "react";
import RouteButtons from "./route-buttons";
import MainPageSlider from "./slider";

export default class index extends Component {
  render() {
    return (
      <div>
        <MainPageSlider />
        <RouteButtons />
      </div>
    );
  }
}
