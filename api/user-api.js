import fetch from 'node-fetch';

const apiBase = 'http://localhost:3000';

const Endpoints = {
  users: '/users',
};

const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  const users = await response.json();

  return users;
};
const getSortByAgeUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}/?_sort=birthDate&_order=asc`);
  const users = await response.json();

  return users;
};

const getSortByNamesUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}/?_sort=lastName,firstName&_order=asc`);
  const users = await response.json();

  return users;
};

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};

const deleteUser = async (id) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: 'DELETE',
    });

  const result = await newUserResponse.json();
  return result;
};

// const deleteUser = (id) => {};

// PUT
const replaceUser = async (id, newUser) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(newUser),
  });

  const result = await newUserResponse.json();
  return result;
};


// PATCH
const updateUser = async (id, newUserFields) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(newUserFields),
  });

  const result = await newUserResponse.json();
  return result;
};

export { getUsers, addUser, getSortByAgeUsers, getSortByNamesUsers, deleteUser, replaceUser, updateUser };

// add 10 - 30 random users
// delete 5 random users
// show oldest and youngest users
// replace 5 random users to random users
// show oldest and youngest users
// update 5 random users (random field for each user)
// show oldest and youngest users
// list all users in alphabet order. Sort by last name then by first name

// repeat 5 times on the same database
