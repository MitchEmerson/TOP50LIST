const express = require("express");
// set up router
const router = express.Router();
// internal modules (database)
const user = require("../models/User.js");





router.get('/sign-up-in', (req, res) => {
    res.render('userViews/sign-up-in.ejs'
   )});


module.exports = router;