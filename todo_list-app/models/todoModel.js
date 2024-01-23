const todos = [];

module.exports = {
    getAllToDos: () => todos,
    addToDo: (todo) => todos.push(todo),
}