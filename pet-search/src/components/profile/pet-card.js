import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import imgPlaceholder from "../../images/img-placeholder.png";

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
      <div>
        <div className="inline-flex items-center">
          <Image
            thumbnail
            className="w-16 h-16 m-auto object-cover"
            src={this.props.pet.images[0] ?? imgPlaceholder}
          />
          <div className="ml-8">
            {this.props.pet.breed} {this.props.pet.type}
          </div>
          <div className="ml-8">{this.props.pet.date}</div>
          <Button onClick={this.handleDelete}>Delete</Button>
        </div>
      </div>
    );
  }
}
