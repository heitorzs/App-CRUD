const { Router } = require("express");
const { getTasks, deleteTask, updateTask, createTask } = require("../controllers/TaskControllers")

const router = Router();

router.get("/get", getTasks);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router