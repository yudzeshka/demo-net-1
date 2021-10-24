/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { addUser, getSortByAgeUsers, getSortByNamesUsers, deleteUser, replaceUser, updateUser } from './api/user-api.js';
import { getRandomUser } from './generators/user-generator.js';
import { rangeInclusive } from './util/util.js';
import { getRandomIntInclusive } from './util/util.js';

const main = async (usersCount) =>
  Promise.all(
    rangeInclusive(1, usersCount).map((_) => addUser(getRandomUser(13, 18)))
  );

const usersCount = parseInt(3);

main(usersCount).then();
