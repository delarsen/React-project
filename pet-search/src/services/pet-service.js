import axios from "axios";

//npx json-server -p 3001 -w db.json

const apiBase = "http://localhost:3001";

const foundPetsEndpoint = "/foundpets";
const lostPetsEndpoint = "/lostpets";

const addFoundPet = async (pet) => {
  try {
    return await (
      await axios.post(`${apiBase}${foundPetsEndpoint}`, pet)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const addLostPet = async (pet) => {
  try {
    return await (
      await axios.post(`${apiBase}${lostPetsEndpoint}`, pet)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const getFoundPets = async () => {
  try {
    return await (
      await axios.get(`${apiBase}${foundPetsEndpoint}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export { addFoundPet, addLostPet, getFoundPets };
