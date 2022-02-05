import React, { Component } from "react";
import RouteButton from "./route-button";
import mainimg1 from "../../../images/bone.png";
import mainimg3 from "../../../images/mainscreen3.png";
import viewpet from "../../../images/mainscreen1.png";

export default class RouteButtons extends Component {
  render() {
    return (
      <div className="flex justify-around  text-lg font-light flex-col md:flex-row ">
        <RouteButton
          text="I am the owner of a missing pet."
          img={mainimg1}
          href="/React-project/reportlostpet"
          buttonName="Missing"
        />

        <RouteButton
          text="I have found someones pet"
          img={mainimg3}
          href="/React-project/reportfoundpet"
          buttonName="Found"
        />
        <RouteButton
          text="View found and lost pets"
          img={viewpet}
          href="/React-project/viewpets"
          buttonName="View pets"
        />
      </div>
    );
  }
}
