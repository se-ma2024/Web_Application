const todoModel = require("../models/todoModel");

// controllers/todoController.js

exports.getToDos = (req, res) => {
    const getAllToDos = todoModel.getAllToDos();
    res.render("index", { todos: getAllToDos});
};

exports.getCompleteToDos = (req, res) => {
    const getCompleteToDos = todoModel.getCompleteToDos();
    res.render("completeTodo", { complete_todos: getCompleteToDos });
}

exports.getAddTodo = (req, res) => {
    res.render("addToDo");
};

exports.postAddTodo = (req, res) => {
    const { title, description, dueDate } = req.body;
    const newTodo = { title, description, dueDate };
    todoModel.addToDo(newTodo);
    res.redirect("/todos");
};

exports.deleteToDo = (req, res) => {
    const index = req.params.index;
    todoModel.deleteToDo(index);
    res.redirect("/todos");
};

exports.deleteCompleteToDo = (req, res) => {
    const index = req.params.index;
    todoModel.deleteCompleteToDo(index);
    res.redirect("/todos/complete_todos");
};

exports.getEditToDo = (req, res) => {
    const index = req.params.index;
    const todoToEdit = todoModel.getAllToDos()[index];
    res.render("editTodo", { index, todoToEdit });
};

exports.postEditToDo = (req, res) => {
    const index = req.params.index;
    const updatedTodo = {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
    };
    todoModel.editToDo(index, updatedTodo);
    res.redirect("/todos");
};

exports.add_completeToDo = (req, res) => {
    const index = req.params.index;
    todoModel.add_completeToDo(index);
    res.redirect("/todos");
};
