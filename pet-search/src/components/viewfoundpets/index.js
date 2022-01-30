import React, { Component, useState } from "react";
import { Col, Button, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import * as petService from "../../services/pet-service";
import PetCards from "../pet-cards/index";
import OffCanvas from "./offcanvas.js";
import { savePetList } from "../../features/filterSlice";
import { connect } from "react-redux";

class ViewFoundPetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      filteredList: [],
    };
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  componentDidMount() {
    petService.getFoundPets().then((response) => {
      this.setState({ pets: response, filteredList: response });
      this.props.savePetList(response);
    });
  }

  onTypeChange(e) {
    const filteredByType = this.state.pets.filter(
      (pet) => pet.type === e.target.value
    );
    this.setState({ filteredList: filteredByType });
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="flex space-between flex-col md:flex-row">
        <OffCanvas />
        <PetCards pets={this.props.pets} url="/React-project/viewfoundpets" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePetList: (pets) => dispatch(savePetList(pets)),
  };
};
const mapStateToProps = (state) => {
  const { filter } = state;
  return { pets: filter.filteredPets };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewFoundPetsPage);
