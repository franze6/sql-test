const Role = require('../models/role');

exports.role_list = (req, res) => {
  Role.findAll().then((roles) => {
    if (roles.length === 0) {
      res.status(404).json([]);
    }
    else {
      res.status(200).json(roles);
    }
  });
};
