const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../model/taskModel");
const router = express.Router();

//create a task

router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

// router.post("/", createTask);

//   //Get tasks
// router.get("/", getTasks);

// //get Task

// router.get("/:id", getTask);

// //delete Task
// router.delete("/:id", deleteTask);

// //put Task
// router.put("/:id", updateTask);

module.exports = router;