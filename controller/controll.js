const Users = require('../model/model');


const getAlldata = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const createAllData = async (req, res) => {
  try {
    const user = new Users({
      name: req.body.name,
      file:req.file.path
    });
    await user.save();
    res.status(201).json("Photo upload successfull");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const delateUser = async (req, res) => {
  try {
    const users = await Users.deleteOne({id:req.params._id});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error.message);
  }
};


module.exports = { getAlldata, createAllData ,delateUser};
