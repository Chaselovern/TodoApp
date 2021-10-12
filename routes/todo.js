const express = require("express");
const router = express.Router();


const{
    createTodo,
    getAllTodo,
    deleteTodo,
    getTodoById,
    getTodo,
} = require("../controllers/todo");

router.post("/todo/create/", createTodo);

router.get("/todos/", getAllTodo);

router.delete("/todo/:todoId/delete", deleteTodo);

router.param("todoId", getTodoById);

router.get("todo/:todoId/", getTodo);

module.exports = router;