const express = require("express");
// set up router
const router = express.Router();

const db = require('../models')

//const comment = require("../models/Comment.js");


router.get('/showComment', (req,res) => {
    res.render('commentViews/showComment.ejs')
});


router.get('/newComment', (req, res) => {
    res.render('commentViews/newComment.ejs'
)});

router.get('/edit', (req,res) => {
    res.render('commentViews/edit.ejs')
});

router.post('/new', async (req,res) => {
    const newComment = {
        ...req.body,
        userId: req.session.currentUser.id
    }
    const result = await db.Comment.create(newComment);
    console.log("new comment:", result)
    res.redirect(`/movie/${newComment.movieIndex}`)
});


module.exports = router;






