import React, { Component } from "react";
import * as petService from "../../services/pet-service";
// async function foundPets() {
//   let response = await petService.getFoundPets();
//   let list = document.querySelector(".petPosts");

//   let key;
//   for (key in response) {
//     list.innerHTML += `
//       <li className="petPosts">
//       <h4>${response[key].type}<h4/></li>`;
//   }
// }
// foundPets();

export default class PetCard extends Component {
  componentDidMount() {
    let response = petService.getFoundPets();
    let list = document.querySelector(".petPosts");

    let key;
    for (key in response) {
      list.innerHTML += `
      <li className="petPosts">
      <h4>${response[key].type}<h4/></li>`;
      console.log(response[key]);
    }
  }
  render() {
    return <ul className="petPosts"></ul>;
  }
}
