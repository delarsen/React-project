import axios from "axios";

const apiBase = "https://pet-search-server.herokuapp.com";
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
const getLostPets = async () => {
  try {
    return await (
      await axios.get(`${apiBase}${lostPetsEndpoint}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const getFoundPetsById = async (id) => {
  try {
    return await (
      await axios.get(`${apiBase}${foundPetsEndpoint}/${id}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const getLostPetsById = async (id) => {
  try {
    return await (
      await axios.get(`${apiBase}${lostPetsEndpoint}/${id}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const deleteFoundPet = async (id) => {
  try {
    return await axios.delete(`${apiBase}${foundPetsEndpoint}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

const deleteLostPet = async (id) => {
  try {
    return await axios.delete(`${apiBase}${lostPetsEndpoint}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export {
  addFoundPet,
  addLostPet,
  getFoundPets,
  getLostPets,
  getFoundPetsById,
  getLostPetsById,
  deleteFoundPet,
  deleteLostPet,
};
