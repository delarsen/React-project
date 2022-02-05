import React, { Component } from "react";
import * as petService from "../../../../services/pet-service";
import PetCards from "../pet-cards/index";
import OffCanvas from "./offcanvas";
import { savePetList } from "../../../../store/filterSlice";
import { connect } from "react-redux";
class ViewLostPetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      filteredList: [],
    };
    this.onTypeChange = this.onTypeChange.bind(this);
  }

  componentDidMount() {
    petService.getLostPets().then((response) => {
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
      <div className="flex space-between flex-col  md:flex-row">
        <OffCanvas />
        <PetCards pets={this.state.pets} url="/React-project/viewlostpets" />
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewLostPetsPage);
