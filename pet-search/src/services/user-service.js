import axios from "axios";

const apiBase = "https://pet-search-server.herokuapp.com";
const usersEndpoint = "/users";

const getUsers = async () => {
  try {
    return await (
      await axios.get(`${apiBase}${usersEndpoint}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const getSortedUsers = async (fields) => {
  try {
    return await (
      await axios.get(`${apiBase}${usersEndpoint}?_sort=${fields}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const addUser = async (user) => {
  try {
    return await (
      await axios.post(`${apiBase}${usersEndpoint}`, user)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUsers = async (id) => {
  try {
    return await axios.delete(`${apiBase}${usersEndpoint}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

const replaceUser = async (id, newUser) => {
  try {
    return await (
      await axios.put(`${apiBase}${usersEndpoint}/${id}`, newUser)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (id, field, value) => {
  const body = {};
  body[field] = value;

  try {
    return await (
      await axios.patch(`${apiBase}${usersEndpoint}/${id}`, body)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

const getUsersById = async (id) => {
  try {
    return await (
      await axios.get(`${apiBase}${usersEndpoint}/${id}`)
    ).data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getUsers,
  addUser,
  deleteUsers,
  replaceUser,
  updateUser,
  getSortedUsers,
  getUsersById,
};
