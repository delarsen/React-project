import React, { Component } from "react";
import RouteButton from "./route-button";
import mainimg1 from "../../images/bone.png";
import mainimg2 from "../../images/bowl.png";
import mainimg3 from "../../images/pet-carrier.jpg";
export default class RouteButtons extends Component {
  render() {
    return (
      <div className="flex justify-around">
        <RouteButton
          text="Missing"
          img={mainimg1}
          href="/reportlostpet"
          className="rounded-full"
        />
        <RouteButton text="Found" img={mainimg2} href="/reportfoundpet" />
        <RouteButton text="View pets" img={mainimg3} href="/viewpets" />
      </div>
    );
  }
}
