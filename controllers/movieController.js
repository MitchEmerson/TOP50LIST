const express = require("express");
// set up router
const router = express.Router();

const db = require('../models')


const movies = require("../db/seed.js")
//db
//const db = require('../models/Index');



router.get('/', (req, res) => {
    const context = {"movies": movies}
    res.render('movieViews/index.ejs', context)
});

router.get('/:id', async (req,res) => {
    console.log(movies[req.params.id])
    const movieIndex = req.params.id
    const movie = movies[movieIndex]

    const comments = await db.Comment.find({movieIndex})
    const context = {"movie": movie, movieIndex, comments}
    console.log({comments})

    res.render('movieViews/show.ejs', context);
});

module.exports = router;


