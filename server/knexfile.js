/**
 * KNEX CONFIG FILE
 */
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/tutorbot',
    migrations: {
      directory: './api/migrations',
    },
    seeds: {
      directory: './api/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './api/migrations',
    },
    seeds: {
      directory: './api/seeds',
    },
  },
};
