
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;  //agar given port pr run na ho toh 4000 pr run kara do

//middleware to parse json request body
app.use(express.json());

//imports routes for TODO API
const todoRoutes = require("./routes/todos")

//mount/Add/Append the todo API routes
app.use("/api/v1" , todoRoutes); //v1 is version mtlb use this api for this version and for other version, use updated api's

//start server
app.listen(PORT , () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res) => {
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
})

