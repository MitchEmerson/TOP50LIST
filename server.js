const { Router } = require('express');
const express = require('express');
const methodOverride = require('method-override');
const db = require('./models');
const app = express();


const controllers = require('./controllers');


// Configuration Variables
const PORT = 3000;
require("dotenv").config();

//view engine
app.set("view engine", "ejs")



//middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));

//Controllers
app.use("/user", controllers.userRoute)
app.use("/movie", controllers.movieRoute);
app.use("/comment", controllers.commentRoute);

// Homepage
app.get("/", function (req, res) {
    res.render("home")
}),


// Server Bind
app.listen(PORT, () => {console.log("DOO DIS DING!!")});
















