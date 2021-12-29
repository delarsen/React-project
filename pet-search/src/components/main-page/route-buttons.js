import React, { Component } from "react";
import RouteButton from "./route-button";
import dog2 from "../img/dog2.jpg";

export default class RouteButtons extends Component {
  render() {
    return (
      <div className="flex justify-around">
        <RouteButton
          text="text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1"
          img={dog2}
        />
        <RouteButton
          text="text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2"
          img={dog2}
        />
        <RouteButton
          text="text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3"
          img={dog2}
        />
      </div>
    );
  }
}
