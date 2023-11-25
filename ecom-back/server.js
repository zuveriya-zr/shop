const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// this is package from node modules it manages the file system
const {readdirSync}=require("fs")


require("dotenv").config();

//lets create our backend application
const app = express();

//connect mongo db
mongoose.connect(process.env.DB, {})
.then(() => console.log("database connected"))
.catch((err) => console.log(err))


//using package middleware
app.use(morgan("dev"))
app.use(bodyParser.json({limit:'3mb'}))
app.use(cors())

//route middleware
//to auto load each route in backend
//localhost:5000/api/create-user
// r        r       r           r
// 1        2        3           4
 readdirSync('./routes').map((r)=> app.use('/api',require('./routes/'+r)))



//port
const port =process.env.PORT || 5000;

//call the api and run it
app.listen(port,() => console.log(`Your Backend is running in port: ${port} `))