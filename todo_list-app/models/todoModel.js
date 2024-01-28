// models/todoModel.js

// ToDoアイテムの配列
const todos = [];
const complete_todos = [];

module.exports = {
  getAllToDos: () => todos,
  getCompleteToDos: () => complete_todos,
  addToDo: (todo) => todos.push(todo),
  add_completeToDo: (index) => {
    const completedTodo = todos.splice(index, 1)[0];
    completedTodo.completedDate = new Date();
    complete_todos.push(completedTodo);
  },  
  deleteToDo: (index) => todos.splice(index, 1),
  deleteCompleteToDo: (index) => complete_todos.splice(index, 1),
  editToDo: (index, updatedTodo) => {
    todos[index] = updatedTodo;
  },
};
