const express = require('express');
const UserController = require('../controllers/user');

const validator = require('../middleware/validator');
const UserValidation = require('../validations/user');
const checkAuth = require('../middleware/check-auth');
const crudRoute = require('./crud_route');

const router = crudRoute(UserController, UserValidation, true);

router.post('/signin', UserValidation.signIn(), validator, (req, res) => UserController.signIn(req, res));
router.post('/signup', UserValidation.signUp(), validator, (req, res) => UserController.signUp(req, res));

router.put('/setRole', checkAuth, UserValidation.setRole(), validator, (req, res) => UserController.setRole(req, res));

module.exports = router;
