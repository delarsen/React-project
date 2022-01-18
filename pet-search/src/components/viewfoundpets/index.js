import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import axios from "axios";
import * as petService from "../../services/pet-service";
import PetCard from "./pet-card.js";

class ViewFoundPetsPage extends Component {
  render() {
    return <PetCard />;
  }
}

export default ViewFoundPetsPage;
