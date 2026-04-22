const EmpModel = require('./model/employModel');

const createEmploy = async (req, res) => {
  const data = await new Employ(req.body);
  const result = await data.save();

  res.json({ msg: 'data created successfully!', data: result })
}

module.exports = {
  createEmploy
}
