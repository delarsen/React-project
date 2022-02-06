import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import imgPlaceholder from "../../../images/img-placeholder.png";
import imgBackground from "../../../images/animals-bc.jpg";
import Loader from "../../common/loader";

export default class PetCards extends Component {
  renderPets() {
    if (!this.props.pets.length) {
      return (
        <div className="text-amber-400 text-3xl col-end-3 mt-64 font-bold h-48 bg-slate-100">
          <div className="mt-20 text-center">Pets not found</div>
        </div>
      );
    }

    return this.props.pets?.map((pet) => {
      return (
        <div key={pet.id}>
          <Card
            className="w-[350px] h-[500px] mt-[10px] ml-[20px]"
            key={pet.id}
          >
            <Card.Img
              variant="top"
              src={pet.images[0] ?? imgPlaceholder}
              className="object-cover min-h-[250px]"
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

              <Card.Text className="text-left text-sm md:text-base italic mb-2 mt-12">
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
      <div className=" grid grid-cols-1 lg:grid-cols-3 w-full pet-card-background">
        {this.props.showLoader ? (
          <div className="col-end-3 ml-half mt-80-percent">
            <Loader variant="warning" />
          </div>
        ) : (
          this.renderPets()
        )}
      </div>
    );
  }
}
