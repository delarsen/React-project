import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";

export default class RouteButton extends Component {
  render() {
    return (
      <div className=" text-center mt-10 md:mt-0">
        <Image
          src={this.props.img}
          className="h-16 md:h-20 w-16 md:w-20 m-auto  "
          roundedCircle
        />
        <div className="mt-2 mb-2 max-w-sm text-md font-base">
          {this.props.text}
        </div>
        <Button
          variant="outline-dark"
          className="text-md font-base"
          href={this.props.href}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}
