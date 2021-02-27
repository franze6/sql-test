const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const Role = require('../models/role');
const CrudController = require('./crud_controller');

class UserController extends CrudController {
  async signUp(req, res) {
    await this.create(req, res);
  }

  async signIn(req, res) {
    try {
      const user = await User.findUserByLogin(req.body.login);

      if (!user) {
        throw new Error('Пользователь не найден!');
      }

      const result = await bcrypt.compare(req.body.password, user.password);
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
        res.status(200)
          .json({
            message: 'Успешно!',
            token
          });
      }
      else {
        throw new Error('Внутренняя ошибка');
      }
    }
    catch (message) {
      res.status(401)
        .json({
          message
        });
    }
  }

  async get(req, res, include) {
    await super.get(req, res, Role);
  }

  async list(req, res, include) {
    await super.list(req, res, Role);
  }

  async setRole(req, res) {
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
  }
}

module.exports = new UserController(User);
