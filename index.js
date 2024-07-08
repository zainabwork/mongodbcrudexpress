const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port= "3000";
const todoRoutes = require("./routes/Todo");

const app = express();
try{
    mongoose.connect("mongodb://127.0.0.1:27017/todoapp")
} catch (error) {
    console.log("Connected to db");
}

app.use(bodyParser.json());
app.use("/api",todoRoutes);
app.listen(port, ()=> {
    console.log(`Listening to http://localhost:${port}`);
})
