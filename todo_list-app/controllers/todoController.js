const todoModel = require("../models/todoModel");

exports.getToDos = (req, res) => {
    const getAllToDos = todoModel.getAllToDos();
    res.render("index", { todos: getAllToDos});
};

exports.addToDo = (req, res) => {
    const newToDo = req.body.newToDo;
    todoModel.addToDo(newToDo);
    res.redirect("/");
};