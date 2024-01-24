const todos = [];

module.exports = {
    getAllToDos: () => todos,
    addToDo: (todo) => todos.push(todo),
    deleteToDo: (index) => todos.splice(index, 1),
    editToDo: (index, updatedTodo) => {
        todos[index] = updatedTodo;
    },
};