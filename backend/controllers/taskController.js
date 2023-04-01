const Task = require("../model/taskModel");

//create(post) task

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
      res.status(200).json(task)
    } catch (error) {
      res.status(500).json({msg: error.message})
    }
};

//get task

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
        return res.status(404).json(`No se encontro Tarea con id:${id}`);
        }
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};


//get tasks

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};


//delete task

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
        return res.status(404).json(`No se encontro Tarea con id:${id}`);
        }
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};

//update task

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true, runValidators: true, });
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({msg: error.message});
      }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
};