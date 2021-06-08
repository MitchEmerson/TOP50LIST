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
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI}),
        //const dbUrl = "mongodb://localhost:27017/TOP50LIST"})
    secret: "This is secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

//logger middleware (tracking)
//app.use(function(req,res,next) {
    //console.log(`${req.method} - ${req.url}`);
    //next();
//});

app.use(function(req,res,next){
    app.locals.user = req.session.currentUser;
    next();
})
// Homepage
app.get("/", function (req, res) {
    res.render("home")
}),

//Controllers
app.use("/", controllers.auth);
app.use("/user", controllers.userRoute);
app.use("/movie", controllers.movieRoute);
app.use("/comment", controllers.commentRoute);

// Homepage
app.get("/", function (req, res) {
    const context = {user: req.session.currentUser}
    res.render("home", context)
}),


// Server Bind
app.listen(PORT, () => {console.log("DOO DIS DING!!")});
















