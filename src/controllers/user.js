const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const Role = require('../models/role');
const Permission = require('../models/permission');

exports.user_signup = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({
        error: err
      });
      return;
    }
    const user = new User({
      login: req.body.login,
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: 'User created',
          result
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err
        });
      });
  });
};

exports.user_signin = (req, res) => {
  User.findUserByLogin(req.body.login, Role)
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: 'Auth failed'
        });
        return;
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          res.status(401).json({
            message: 'Auth failed'
          });
          return;
        }
        if (result) {
          const token = jwt.sign(
            {
              login: user.login,
              userId: user.id
            },
            config.JWT_KEY,
            {
              expiresIn: '1y'
            }
          );
          console.log(jwt.verify(token, config.JWT_KEY));
          res.status(200).json({
            message: 'Auth successful',
            token
          });
          return;
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
