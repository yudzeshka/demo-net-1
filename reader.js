/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import { getUsers } from './api/user-api.js';

const formatUser1 = (user) => `${user.id}, ${user.firstName}, ${user.lastName}`;

const formatUser2 = (user) => {
  const { id, firstName, lastName } = user;
  return `${firstName[0]}.${lastName[0]}.${id}`;
};
const formatUser3 = (user) => `${user.id}`;

const formatUsers = (users, formatter) =>
  users.map((user) => formatter(user)).join('\n');

const main = async () => {
  const users = await getUsers();
  console.log(formatUsers(users, formatUser2));
  console.log(formatUsers(users, formatUser1));
 const arr = formatUsers(users, formatUser3);
  console.log(arr);
};

main().then();
