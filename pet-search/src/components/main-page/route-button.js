import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";

export default class RouteButton extends Component {
  render() {
    return (
      <div className="mr-10 text-center">
        <Image
          src={this.props.img}
          className="h-32 w-32 m-auto"
          roundedCircle
        />
        <div className="mt-2 mb-2 max-w-sm">{this.props.text}</div>
        <Button variant="primary">Primary</Button>
      </div>
    );
  }
}