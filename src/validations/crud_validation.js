const { param } = require('express-validator');

class CrudValidation {
  static create() {
    return [];
  }

  static list() {
    return [];
  }

  static get() {
    return [
      param('id').trim().notEmpty().isInt()
    ];
  }

  static update() {
    return [
      param('id').trim().notEmpty().isInt()
    ];
  }

  static delete() {
    return [
      param('id').trim().notEmpty().isInt()
    ];
  }
}

module.exports = CrudValidation;
