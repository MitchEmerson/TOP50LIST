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


module.exports = router;






