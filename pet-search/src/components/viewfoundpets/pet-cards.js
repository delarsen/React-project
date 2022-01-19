import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { render } from "react-dom";
import * as petService from "../../services/pet-service";
import imgPlaceholder from "../../images/img-placeholder.png";

export default class PetCards extends Component {
  renderPets() {
    console.log(this.props.pets);
    return this.props.pets?.map((pet) => {
      return (
        <div className="">
          <Card
            style={{ width: "90%", height: "80%", margin: "10px 0 0 20px" }}
            key={pet.id}
          >
            <Card.Img
              variant="top"
              src={pet.images[0] ?? imgPlaceholder}
              style={{ height: "55%" }}
              className="object-cover"
            />
            <Card.Body>
              <Card.Title>
                "{pet.breed}" {pet.type}
              </Card.Title>
              <Card.Text>
                Gender: {pet.gender}, Age: {pet.age}, Neutered:
                {pet.neutered} , Color: {pet.color}.
              </Card.Text>
              <Button variant="primary">View more info</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div className=" grid  grid-rows-3 grid-cols-3 ">
          {this.renderPets()}
        </div>
      </>
    );
  }
}
