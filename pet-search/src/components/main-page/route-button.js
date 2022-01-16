import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";

export default class RouteButton extends Component {
  render() {
    return (
      <div className=" text-center">
        <Image
          src={this.props.img}
          className="h-20 md:h-32 w-20 md:w-32 m-auto border-4 border-neutral-700 "
          roundedCircle
        />
        <div className="mt-2 mb-2 max-w-sm text-md font-base">
          {this.props.text}
        </div>
        <Button
          variant="primary"
          className="text-md font-base"
          href={this.props.href}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}
