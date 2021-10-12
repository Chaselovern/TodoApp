const Todo = require("../models/Todo");


exports.getAllTodo = (req, res) => {
    Todo.find().sort("-createdAt").exec((err, todos) => {
if (err || !todos){
    return res.status(400),json({
        error: "There was an error finding all of the entries",
    });
}

res.json(todos);
    });
};

exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err, task) => {
        if (err || !task) {
            console.log(task);
            console.log(err);
            return res.status(400).json({
                error:"Something went wrong",
            });
        }
        res.json({task});
    });
};
exports.getTodoById = (req, res, next, todoId) => {
    Todo.findById(todoId).exec((err, todo) => {
        if (err || !todo) {
            return res.status(400).json({
                error: "404 todo not found",
            });
        }
        req.todo = todo;
        next();
    });
};    

exports.getTodo = (req,res) => {
    return res.json(req.todo);
}

exports.deleteTodo = (req, res) => {
    const todo = req.todo;
    todo.remove((err, task) => {
        if (err || !task) {
            return res.status(400).json({
                error: "something went wrong while deleteing the task",
            });
        }
        res.json({
            task_deleted: task,
            message: "Task deleted successfully!",
        });
    });
};