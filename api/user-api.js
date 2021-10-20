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

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};

const deleteUser = (id) => {};

// PUT
const replaceUser = (id, newUser) => {};

// PATCH
const updateUser = (id, newUserFields) => {};

export { getUsers, addUser };

// add 10 - 30 random users
// delete 5 random users
// show oldest and youngest users
// replace 5 random users to random users
// show oldest and youngest users
// update 5 random users (random field for each user)
// show oldest and youngest users
// list all users in alphabet order. Sort by last name then by first name

// repeat 5 times on the same database
