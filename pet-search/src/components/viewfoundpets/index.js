import React, { Component } from "react";
import { Col, Button, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import * as petService from "../../services/pet-service";
import PetCards from "./pet-cards.js";

class ViewFoundPetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    petService
      .getFoundPets()
      .then((response) => this.setState({ pets: response }));
  }

  render() {
    return (
      <div className="flex space-between">
        <div className="w-7/12 min-h-full bg-gray-300">
          <h4 className="text-center font-bold mt-10">Refine Results</h4>
          <div className="text-lg ">
            Showing {this.state.pets.length} results.
          </div>
          <div>
            <label>Type of pet</label>
            <br />
            <select placeholder="cat">
              <option value="cat">cat</option>
              <option value="dog">dog</option>
              <option value="bunny">bunny</option>
            </select>
          </div>
        </div>

        <PetCards pets={this.state.pets} />
      </div>
    );
  }
}

export default ViewFoundPetsPage;
