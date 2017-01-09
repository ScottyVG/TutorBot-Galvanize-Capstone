'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists('users').then(() => {
    return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('name').notNullable().unique();
      table.string('hash_pw').notNullable();
      table.string('email').notNullable().unique();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
