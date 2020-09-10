const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');

exports.user_login = (req, res, next) => {
  User.find({
    where: {
      login: req.body.login
    }
  })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        res.status(401).json({
          message: 'Auth failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          res.status(401).json({
            message: 'Auth failed'
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              login: user[0].login,
              userId: user[0].id
            },
            config.JWT_KEY,
            {
              expiresIn: '1y'
            }
          );
          res.status(200).json({
            message: 'Auth successful',
            token
          });
        }
        res.status(401).json({
          message: 'Auth failed'
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
