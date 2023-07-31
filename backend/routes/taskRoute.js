const express = require("express");
const { createUser, getUsers, getUser, deleteUser, updateUser } = require("../controllers/taskController");
const User = require("../model/taskModel");
const router = express.Router();

//create a task

router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser)

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
