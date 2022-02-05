import React, { Component } from "react";
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
      userPets: [],
    };
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  componentDidMount() {
    petService.getFoundPets().then((response) => {
      //Reverse pet-cards
      response = response.sort((a, b) => b.id - a.id);
      // Get parsed user.
      const user = JSON.parse(localStorage.getItem("user"));
      // Get current user found pets.

      this.setState({
        userPets: response.filter((pet) => pet.registeredBy === user?.id),
        filteredList: response,
      });
      this.setState({ pets: response, filteredList: response });
      this.props.savePetList(response);
    });
  }

  onTypeChange(e) {
    const filteredByType = this.state.pets.filter(
      (pet) => pet.type === e.target.value
    );
    this.setState({ filteredList: filteredByType });
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
