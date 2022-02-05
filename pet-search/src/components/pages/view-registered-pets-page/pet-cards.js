import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import imgPlaceholder from "../../../images/img-placeholder.png";
import imgBackground from "../../../images/animals-bc.jpg";

export default class PetCards extends Component {
  renderPets() {
    if (!this.props.pets.length) {
      return <div>Pets not found</div>;
    }

    return this.props.pets?.map((pet) => {
      return (
        <div key={pet.id}>
          <Card
            style={{
              width: "270px",
              height: "500px",
              margin: "10px 0 0px 20px",
            }}
            key={pet.id}
          >
            <Card.Img
              variant="top"
              src={pet.images[0] ?? imgPlaceholder}
              style={{ minHeight: "250px" }}
              className="object-cover"
            />
            <Card.Body className="text-center">
              <Card.Title className="text-center text-xl">
                "{pet.breed}" {pet.type}
              </Card.Title>
              <Card.Text className="text-lg text-center">
                Gender: {pet.gender}, Age: {pet.age}. <br />
                Neutered: {pet.neutered}, Color: {pet.color}.
              </Card.Text>

              <Button
                variant="primary"
                className="text-center"
                href={`${this.props.url}/${pet.id}`}
              >
                View more info
              </Button>
              <br />
              <br />
              <br />
              <Card.Text className="text-left text-sm md:text-base italic mb-2">
                {this.props.type === "lost" ? "Lost" : "Found"} on {pet.date}.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div
          className=" grid grid-cols-1 lg:grid-cols-3 w-full"
          style={{ backgroundImage: `url(${imgBackground})` }}
        >
          {this.renderPets()}
        </div>
      </>
    );
  }
}
