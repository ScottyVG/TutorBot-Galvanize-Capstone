/**
 * AUTH ROUTE FILE
 */
'use strict';

const api = require('../api/query/users');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

// Join
router.post('/new', (req, res, next) => {
  const newUser = req.body;
  newUser.hash_pw = bcrypt.hashSync(newUser.password, 12);
  delete newUser.password;

  api.createUser(newUser)
    .then((user) => {
      const insert = user[0];
      delete insert.hash_pw;
      delete insert.created_at;
      delete insert.updated_at;
      req.session.user = insert;
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// Login
router.post('/', (req, res, next) => {
  const user = req.body;
  api.listUsers()
    .then((users) => {
      const stored = users.find((el) => el.email === user.email);
      if (stored && bcrypt.compareSync(user.password, stored.hash_pw)) {
        delete stored.hash_pw;
        delete stored.created_at;
        delete stored.updated_at;
        req.session.user = stored;
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
