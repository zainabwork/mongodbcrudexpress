const Todo = require("../models/Todo");


exports.getAllTodos = async(req, res) => {

    try {
        const todos = await Todo.find().sort("-createdAt");
        return res.json(todos);
    } catch (err) {
        return res.status({status:500, message:"Something went wrong in finding all todos"});
        }
    }

exports.createTodo = async(req,res) => {
    try{
        const todo = new Todo(req.body);
        const savedTodo = await todo.save();
        res.json({savedTodo})
    } catch(error){
        return res.status({status:400, message:"something went wromng"})
    }  
}

exports.deleteTodo = async(req,res) => {
    try{
        const todoId = req.params.todoId;
        // console.log("id:",typeof todoId);
        console.log("id:",todoId);
        const deletedTodo = await Todo.findByIdAndDelete({_id:todoId});
        if(deletedTodo) {
            return res.status(200).json({message:"Deletied successfully"})
        } else return res.status(500).json({error:"No todo found"})
    } catch(error){
        return res.status(400).json({error:"Somehting went wrong while deleting"})
    }
}

exports.updateTodo = async(req, res) => {
    try{
        const updateId = req.params.todoId;
        // console.log("id:",updateId);
        const {todo} = req.body;
        console.log("body;",req.body)
        const update = await Todo.findByIdAndUpdate({_id:updateId}, todo);
        if(!update) {
            return res.status(500).json({ message: "Update not successful" });
        } else {
            return res.status(200).json({ message: "Successfully updated", updatedTodo: update });
        }
    } catch(error) {
        res.status(400).json({ message: "Something went wrong while updating"});
    }
}