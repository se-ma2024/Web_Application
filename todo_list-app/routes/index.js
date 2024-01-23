const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getToDos);
router.post("/add", todoController.addToDo);

module.exports = router;