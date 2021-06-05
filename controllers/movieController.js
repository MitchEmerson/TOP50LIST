const express = require("express");
// set up router
const router = express.Router();


const movie = require("../models/Movie.js");

//db
//const db = require('../models/Index');



router.get('/movie', (req, res) => {
    res.render('movieViews/show.ejs'
)});


module.exports = router;


