const express = require('express');
const validator = require('../middleware/validator');
const checkAuth = require('../middleware/check-auth');

module.exports = (controller, rules, isAuth = false) => {
  const router = express.Router();
  const authMethod = isAuth ? checkAuth : (req, res, next) => {
    next();
  };

  router.get('/:id', authMethod, rules.get(), validator, (req, res) => controller.get(req, res));
  router.get('/', authMethod, rules.list(), validator, (req, res) => controller.list(req, res));
  router.post('/', authMethod, rules.create(), validator, (req, res) => controller.create(req, res));
  router.patch('/:id', authMethod, rules.update(), validator, (req, res) => controller.update(req, res));
  router.delete('/:id', authMethod, rules.delete(), validator, (req, res) => controller.delete(req, res));

  return router;
};
