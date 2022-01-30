import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as petService from "../../services/pet-service";
import imgPlaceholder from "../../images/img-placeholder.png";

export default function PetPage(props) {
  let { id } = useParams();
  const [pet, setPet] = React.useState({});
  useEffect(() => {
    console.log(id);
    if (props.type === "lost") {
      petService.getLostPetsById(id).then((response) => setPet(response));

      return;
    }
  }, []);
  console.log(pet);

  function neutered() {
    if (pet.neutered === "yes") {
      return "neutered";
    }
    return "not neutered";
  }

  return (
    <div>
      <div className="w-full h-[300px] bg-sky-400 text-center pt-20 md:pt-12 text-3xl text-white font-light sm:text-5xl md:text-7xl">
        <span>
          Missing {pet.type} "{pet.breed}"
        </span>
        <br />
        <ul className="flex space-x-36 text-2xl text-center justify-center mt-24">
          <li type="circle">{pet.age}</li>
          <li type="circle">{pet.gemder}</li>
          <li type="circle">{pet.color}</li>
          <li type="circle">{neutered()}</li>
          <li type="circle">{pet.date}</li>
        </ul>
      </div>
      <div className="flex mt-4 mb-4 ml-16 space-x-16">
        <span>
          <img src={imgPlaceholder} className="w-[450px] h-[400px] border-1" />
        </span>
        <span className="border-2 w-48 ">{pet.description}</span>
      </div>
    </div>
  );
}
