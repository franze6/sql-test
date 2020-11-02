const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const Role = require('../models/role');

exports.user_signup = async (req, res) => {
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    try {
      if (err) {
        throw new Error(err);
      }
      
      const user = await User.create({
        login: req.body.login,
        email: req.body.email,
        password: hash
      });

      res.status(201).json({
        message: 'User created',
        user
      });
    }
    catch (e) {
      res.status(500).json({
        error: e
      });
    }
  });
};

exports.user_signin = async (req, res) => {
  try {
    const user = await User.findUserByLogin(req.body.login);

    if (!user) {
      throw new Error('Пользователь не найден!');
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        console.error(err);
      }
      if (result) {
        const token = jwt.sign(
          {
            login: user.login,
            id: user.id
          },
          config.JWT_KEY,
          {
            expiresIn: '1y'
          }
        );
        console.log(jwt.verify(token, config.JWT_KEY));
        res.status(200)
          .json({
            message: 'Успешно!',
            token
          });
      }
      else {
        throw new Error('Внутренняя ошибка');
      }
    })
      .catch((err) => {
        console.log(err);
        res.status(500)
          .json({
            error: err
          });
      });
  }
  catch (message) {
    res.status(401)
      .json({
        message
      });
  }
};

exports.user_get = async (req, res) => {
  try {
    const user = await User.findByPk(req.userData.id, {
      include: {
        model: Role
      } 
    });

    res.status(200).json(user);
  }
  catch (e) {
    console.error(e);
    res.status(500).json({
      message: 'Что-то пошло не так!'
    });
  }
};

exports.user_list = async (req, res) => {
  try {
    const users = await User.findAll({
      include: Role
    });

    res.status(200).json(users);
  }
  catch (e) {
    console.error(e);
    res.status(404).json([]);
  }
};

exports.user_setRole = async (req, res) => {
  try {
    const userId = req.body.userId || req.userData.id;

    const user = await User.findByPk(userId, {
      include: Role
    });

    const newRole = await Role.findByPk(req.body.id);
    user.setRole(newRole);
    await user.save();

    res.status(200).json(await user.reload());
  }
  catch (e) {
    console.error(e);
    res.status(500).json({
      message: 'Что-то пошло не так!'
    });
  }
};
