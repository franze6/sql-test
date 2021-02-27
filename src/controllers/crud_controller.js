class CrudController {
  constructor(Model) {
    this.Model = Model;
  }

  async create(req, res) {
    try {
      const model = await this.Model.create(req.body.data);

      res.status(201).json(model);
    }
    catch (e) {
      console.error(e);
      res.status(500).json({});
    }
  }

  async get(req, res, include) {
    try {
      const model = await this.Model.findByPk(req.params.id, {
        include
      });

      if (!model) {
        throw new Error('Пользователь не найден!');
      }

      res.status(200).json(model);
    }
    catch (e) {
      console.error(e);
      res.status(404).json({});
    }
  }

  async list(req, res, include) {
    try {
      const models = await this.Model.findAll({
        include
      });

      res.status(200).json(models);
    }
    catch (e) {
      console.error(e);
      res.status(404).json({});
    }
  }

  async update(req, res) {
    let model;
    try {
      model = await this.Model.findByPk(req.params.id);
      await model.update(req.body.data);
      await model.save();
      res.status(200).json(await model.reload());
    }
    catch (e) {
      if (!model) {
        res.status(404).json({});
      }
      else {
        res.status(500).json({});
      }
    }
  }

  async delete(req, res) {
    let model;
    try {
      model = await this.Model.findByPk(req.params.id);
      await model.destroy();
      res.status(200).json({});
    }
    catch (e) {
      if (!model) {
        res.status(404).json({});
      }
      else {
        res.status(500).json({});
      }
    }
  }
}

module.exports = CrudController;
