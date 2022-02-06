import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import imgPlaceholder from "../../../images/img-placeholder.png";

export default class PetCard extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDeletePet(this.props.pet);
  }

  render() {
    return (
      <div className="ml-16 mt-8">
        <div className="inline-flex items-center border-2 p-2">
          <Image
            thumbnail
            className="w-24 min-h-[68px] m-auto object-cover"
            src={this.props.pet.images[0] ?? imgPlaceholder}
          />
          <div className="ml-8">
            {this.props.pet.breed} {this.props.pet.type}
          </div>
          <div className="ml-8">{this.props.pet.date}</div>
          <Button onClick={this.handleDelete} className="ml-4">
            Delete
          </Button>
        </div>
      </div>
    );
  }
}
