'use strict';

const environment = process.env.ENV || 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);

module.exports = knex;
