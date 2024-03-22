const express = require("express");
const mongoose = require("mongoose");
const port = 8000

const app = express();
const userRouter = require("./routes/user")
const {connectMongoDb} = require("./connection")
const {myMiddleware} = require('./middlewares')

//Connection
connectMongoDb("mongodb://localhost:27017").then(()=>{
    console.log("Mongodb Connected");
    
})

//Middleware
app.use(myMiddleware("Middleware Triggered"))


//Routes
app.use('/user',userRouter)

app.listen(port,()=>{
    console.log("Server started at port :", port);
    
})