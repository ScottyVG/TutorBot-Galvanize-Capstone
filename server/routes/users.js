/**
 * USERS ROUTE FILE
 */
'use strict';

const api = require('../api/query/users');
const express = require('express');
const router = express.Router();

/* Create */
router.post('/', (req, res, next) => {
  const newUser = req.body;
  api.createUser(newUser)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

/* Read */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  api.readUser(id)
    .first()
    .then((user) => res.json(user))
    .catch((err) => next(err));
});

/* Update */
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  api.updateUser(id, changes)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

/* Delete */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  api.deleteUser(id)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

/* Lists */
router.get('/', (req, res, next) => {
  api.listUsers()
    .then((users) => res.json(users))
    .catch((err) => next(err));
});

module.exports = router;
