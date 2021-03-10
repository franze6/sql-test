const Question = require('../models/question');

exports.questions_list = (req, res) => {
  Question.findAll({
    limit: 50
  })
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      }
      else {
        res.status(404).json({
          message: 'No questions'
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error
      });
    });
};

exports.create_question = (req, res) => {
  const { body } = req;
  const questionModel = global.questionTypes[body.type];
  const question = new Question({
    type: body.type
  });
  question
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        error
      });
    });
};
