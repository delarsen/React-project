import fetch from "node-fetch";

const apiBase = "http://localhost:3000";

const usersEndpoint = "/users";

const getUsers = async () => {
  const response = await fetch(`${apiBase}${usersEndpoint}`);
  const users = await response.json();

  return users;
};

const getSortedUsers = async (fields) => {
  const response = await fetch(`${apiBase}${usersEndpoint}?_sort=${fields}`);
  const users = await response.json();

  return users;
};

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${usersEndpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};

const deleteUsers = async (id) => {
  await fetch(`${apiBase}${usersEndpoint}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
};

const replaceUser = async (id, newUser) => {
  const newUserResponse = await fetch(`${apiBase}${usersEndpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(newUser),
  });

  await newUserResponse.json();
};

const updateUser = async (id, field, value) => {
  const body = {};
  body[field] = value;

  await fetch(`${apiBase}${usersEndpoint}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(body),
  });
};

export {
  getUsers,
  addUser,
  deleteUsers,
  replaceUser,
  updateUser,
  getSortedUsers,
};
