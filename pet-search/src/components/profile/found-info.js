import React, { Component } from "react";
import * as petService from "../../services/pet-service";
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
    // Get parsed user
    const user = JSON.parse(localStorage.getItem("user"));

    petService.getFoundPets().then((response) => {
      // Get parsed user.
      console.log(response);
      const userPets = response?.filter((pet) => pet.registeredBy === user.id);
      this.setState({ pets: userPets });
      console.log(userPets);
    });
  }

  onDeletePet(pet) {
    petService.deleteFoundPet(pet.id).then(() => {
      this.setState({ pets: this.state.pets.filter((i) => i.id !== pet.id) });
    });
  }

  render() {
    return (
      <div>
        {this.state.pets.map((pet) => (
          <PetCard pet={pet} key={pet.id} onDeletePet={this.onDeletePet} />
        ))}
      </div>
    );
  }
}
