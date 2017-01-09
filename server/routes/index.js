/**
 * MAIN INDEX ROUTE FILE
 */
'use strict';

const users = require('./users');
const auth = require('./auth');
const express = require('express');
const router = express.Router();

/* ROUTER */

router.use('/users', users);
router.use('/auth', auth);

module.exports = router;
