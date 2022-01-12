import React, { Component } from "react";
import RouteButton from "./route-button";
import mainimg1 from "../../images/bone.png";
import mainimg2 from "../../images/bowl.png";
import mainimg3 from "../../images/pet-carrier.jpg";
export default class RouteButtons extends Component {
  render() {
    return (
      <div className="flex justify-around mr-10">
        <RouteButton
          text="I am the owner of a missing pet."
          img={mainimg1}
          href="/reportlostpet"
          buttonName="Missing"
        />
        <RouteButton
          text="I have found someones pet"
          img={mainimg2}
          href="/reportfoundpet"
          buttonName="Found"
        />
        <RouteButton
          text="View found and lost pets"
          img={mainimg3}
          href="/viewpets"
          buttonName="View pets"
        />
      </div>
    );
  }
}