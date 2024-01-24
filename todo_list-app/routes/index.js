const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getToDos);
router.get("/add", todoController.getAddTodo);
router.post("/add", todoController.postAddTodo);
router.get("/delete/:index", todoController.deleteToDo);
router.get("/edit/:index", todoController.getEditToDo);
router.post("/edit/:index", todoController.postEditToDo);

module.exports = router;