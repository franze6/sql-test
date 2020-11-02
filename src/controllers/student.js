const Student = require('../models/student');
const User = require('../models/user');

exports.create = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  }
  catch (e) {
    console.error(e);
    res.status(500).json({});
  }
};

exports.get = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId || req.userData.id, {
      include: Student
    });

    res.status(200).json(user.student);
  }
  catch (e) {
    console.error(e);
    res.status(404).json({});
  }
};
