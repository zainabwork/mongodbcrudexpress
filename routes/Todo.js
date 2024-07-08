const express = require("express");
const router = express.Router();

const { createTodo, getAllTodos, deleteTodo, updateTodo} = require("../controllers/Todo");

router.get("/todos/", getAllTodos);
router.post("/todo/create/", createTodo);
router.delete("/todo/delete/:todoId",deleteTodo)
router.put("/todo/update/:todoId", updateTodo)
module.exports = router;