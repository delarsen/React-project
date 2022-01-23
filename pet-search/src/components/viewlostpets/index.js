import React, { Component } from "react";
import { Col, Button, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import * as petService from "../../services/pet-service";
import PetCards from "./pet-cards.js";
const values = "k";
class ViewLostPetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      filteredList: [],
    };
  }

  componentDidMount() {
    petService
      .getLostPets()
      .then((response) => this.setState({ pets: response }));
  }

  onChange() {}
  render() {
    return (
      <div className="flex space-between flex-col  md:flex-row">
        <div className="md:w-5/12 min-h-full bg-gray-100 w-full ">
          <h4 className="text-center font-bold mt-10">Refine Results</h4>
          <div className="text-sm text-center">
            Showing {this.state.pets.length} results
          </div>
          <br />
          <div className="md:ml-4 text-center">
            <label className="font-semibold">Type of pet</label>
            <br />
            <select
              defaultValue="all"
              className="w-64 h-8"
              onChange={this.onChange}
            >
              <option key="cat" value="cat">
                cat
              </option>
              <option key="dog" value="dog">
                dog
              </option>
              <option key="bunny" value="bunny">
                bunny
              </option>
              <option key="all" value="all">
                all types
              </option>
            </select>
          </div>
          <br />
          <div className="md:ml-4 text-center">
            <span>
              <label className="font-semibold">From Date:</label>
              <br />
              <input type="date" className="w-64 h-8 "></input>
            </span>
            <br />
            <br />
            <span>
              <label className="font-semibold">Till Date:</label>
              <br />
              <input type="date" className="w-64 h-8"></input>
            </span>
          </div>
          <br />
          <div className="md:ml-4 text-center">
            <label className="mb-1 font-semibold">Gender:</label>
            <br />
            <span>
              <input
                type="checkbox"
                value="male"
                name="gender"
                className="w-4 h-4"
              />
              Male
            </span>
            <span className="ml-4">
              <input
                type="checkbox"
                value="female"
                name="gender"
                className="w-4 h-4"
              />
              Female
            </span>
            <span className="ml-4">
              <input
                type="checkbox"
                value="dontknow"
                name="gender"
                className="w-4 h-4"
              />
              Don't know
            </span>
          </div>
          <br />
          <div className="md:ml-4 text-center mb-4 md:mb-0">
            <label className="mb-1 font-semibold">Neutered?</label>
            <br />
            <span>
              <input
                type="checkbox"
                value="yes"
                name="neutered"
                className="w-4 h-4"
              />
              Yes
            </span>
            <span className="ml-4">
              <input
                type="checkbox"
                value="no"
                name="neutered"
                className="w-4 h-4"
              />
              No
            </span>
          </div>
        </div>

        <PetCards pets={this.state.pets} />
      </div>
    );
  }
}

export default ViewLostPetsPage;
