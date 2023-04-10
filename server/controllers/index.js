'use strict';

const router = require('express').Router();

const error = require('./error');

const loginControlers = require('./loginControlers.js');
const signupControler = require('./signupControler');

router.post('/login', loginControlers);
router.post('/signup', signupControler);

router.use(error.client);
router.use(error.server);

module.exports = router;
