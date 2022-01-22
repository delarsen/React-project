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
        <div className="w-7/12 min-h-full bg-gray-100">
          <h4 className="text-center font-bold mt-10">Refine Results</h4>
          <div className="text-lg ">
            Showing {this.state.pets.length} results.
          </div>
          <div>
            <label>Type of pet</label>
            <br />
            <select defaultValue="all" className="w-48 ">
              <option value="cat">cat</option>
              <option value="dog">dog</option>
              <option value="bunny">bunny</option>
              <option value="all">all types</option>
            </select>
          </div>
          <br />
          <div>
            <label>From Date:</label>
            <br />
            <input type="date"></input>
          </div>
          <br />
          <div>
            <label>Till Date:</label>
            <br />
            <input type="date"></input>
          </div>
          <br />
          <div>
            <label>Gender:</label>
            <br />
            <span>
              <input type="checkbox" value="male" name="gender" />
              Male
            </span>
            <span className="ml-4">
              <input type="checkbox" value="female" name="gender" />
              Female
            </span>
            <span className="ml-4">
              <input type="checkbox" value="dontknow" name="gender" />
              Don't know
            </span>
          </div>
          <br />
          <div>
            <label>Neutered?</label>
            <br />
            <span>
              <input type="checkbox" value="yes" name="neutered" />
              Yes
            </span>
            <span className="ml-4">
              <input type="checkbox" value="no" name="neutered" />
              No
            </span>
          </div>
        </div>

        <PetCards pets={this.state.pets} />
      </div>
    );
  }
}

export default ViewFoundPetsPage;
