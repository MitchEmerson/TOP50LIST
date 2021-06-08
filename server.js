const { Router } = require('express');
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
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
app.use(session({
    store: MongoStore.create({ mongoUrl: "process.env.MONGODB_URI"}),
        //const dbUrl = "mongodb://localhost:27017/TOP50LIST"})
    secret: "This is secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

//logger middleware (tracking)
app.use(function(req,res,next) {
    console.log(`${req.method} - ${req.url}`);
    next();
});

//Controllers
app.use("/", controllers.auth);
app.use("/user", controllers.userRoute);
app.use("/movie", controllers.movieRoute);
app.use("/comment", controllers.commentRoute);

// Homepage
app.get("/", function (req, res) {
    res.render("home")
}),


// Server Bind
app.listen(PORT, () => {console.log("DOO DIS DING!!")});
















