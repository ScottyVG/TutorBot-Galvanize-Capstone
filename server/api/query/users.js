/**
 * QUERY USERS DATABASE
 */
'use strict';

const knex = require('../knex');

/* Create */
const createUser = (newUsers) => {
  return knex('users').returning('*').insert(newUsers);
};

/* Read */
const readUser = (id) => {
  return knex('users').select('*').first().where('id', id);
};

/* Update */
const updateUser = (id, changes) => {
  changes.updated_at = new Date();

  return knex('users').where('id', id).update(changes);
};

/* Delete */
const deleteUser = (id) => {
  return knex('users').where('id', id).del();
};

/* Lists */
const listUsers = () => {
  return knex('users').select('*').orderBy('created_at', 'asc');
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  listUsers,
};
