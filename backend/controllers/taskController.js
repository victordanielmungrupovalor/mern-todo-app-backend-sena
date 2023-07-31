const User = require("../model/taskModel");

//create(post) user

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({msg: error.message})
    }
};

//get user

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
        return res.status(404).json(`No se encontro User con id:${id}`);
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};


//get users

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};


//delete user

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
        return res.status(404).json(`No se encontro User con id:${id}`);
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};

//update task

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true, });
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
};
