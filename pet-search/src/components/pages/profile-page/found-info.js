import React, { Component } from "react";
import * as petService from "../../../services/pet-service";
import PetCard from "./pet-card";

export default class FoundInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };

    this.onDeletePet = this.onDeletePet.bind(this);
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    petService.getFoundPets().then((response) => {
      const userPets = response?.filter((pet) => pet.registeredBy === user.id);
      this.setState({ pets: userPets });
    });
  }

  onDeletePet(pet) {
    petService.deleteFoundPet(pet.id).then(() => {
      this.setState({ pets: this.state.pets.filter((i) => i.id !== pet.id) });
    });
  }

  render() {
    return (
      <div className="w-full">
        <div className="bg-amber-400 w-full h-48 text-white text-7xl font-light text-center pt-16">
          Here are your found pet notices
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-rows-3 w-full">
          {!this.state.pets.length ? (
            <div className="col-start-1 col-end-3 text-center mt-48 text-xl">
              Pets not found
            </div>
          ) : (
            this.state.pets.map((pet) => (
              <PetCard pet={pet} key={pet.id} onDeletePet={this.onDeletePet} />
            ))
          )}
        </div>
      </div>
    );
  }
}
