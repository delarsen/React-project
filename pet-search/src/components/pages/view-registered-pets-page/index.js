import React, { Component } from "react";
import * as petService from "../../../services/pet-service";
import PetCards from "./pet-cards";
import Filter from "./filter.js";
import { savePetList } from "../../../store/filterSlice";
import { connect } from "react-redux";

class ViewRegisteredPetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      url: "",
      showLoader: true,
    };
  }

  componentDidMount() {
    if (this.props.type === "found") {
      this.setState({ url: "/React-project/viewfoundpets" });
      petService.getFoundPets().then((response) => {
        response = response.sort((a, b) => b.id - a.id);
        this.setState({ pets: response, showLoader: false });
        this.props.savePetList(response);
      });
      return;
    }

    this.setState({ url: "/React-project/viewlostpets" });
    petService.getLostPets().then((response) => {
      response = response.sort((a, b) => b.id - a.id);
      this.setState({ pets: response, showLoader: false });
      this.props.savePetList(response);
    });
  }

  render() {
    return (
      <div className="flex main-content space-between flex-col md:flex-row">
        <Filter type={this.props.type} />
        <PetCards
          pets={this.props.pets}
          url={this.state.url}
          type={this.props.type}
          showLoader={this.state.showLoader}
        />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRegisteredPetsPage);
