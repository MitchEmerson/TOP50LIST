const express = require("express");
// set up router
const router = express.Router();
const db = require("bcryptjs")

const db = require('../models')

router.get('/register', function(req,res) {
    res.render('auth/register')
});

router.post('/register', async function(req,res) {
    try {
    const foundUser = await db.User.findOne({password: req.body.password});
    if(foundUser){
        return res.redirect("/login");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    const newUser = await db.User.create(req.body);
    return res.redirect("/login");

} catch(err) {
    console.log(err);
    res.send(err);
}

});

router.post('/login', function(req,res) {
    res.render('auth/register')
});

router.post('/login',function(req,res){

});








module.exports = router;