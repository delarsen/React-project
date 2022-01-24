import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as petService from "../../services/pet-service";

export default function PetPage(props) {
  let { id } = useParams();
  const [pet, setPet] = React.useState({});
  useEffect(() => {
    console.log(id);
    if (props.type === "lost") {
      petService.getLostPetsById(id).then((response) => setPet(response));
      console.log(pet);
      return;
    }
  }, []);
  console.log(pet);
  return <div></div>;
}
