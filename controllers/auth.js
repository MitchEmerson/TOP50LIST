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

router.get('/login', function(req,res) {
    
    res.render('auth/login')
});

router.post('/login', async function(req,res){
    try {
        const foundUser = await db.User.findOne({password: req.body.password});
        
        const match = await bcrypt.compare(req.body.password, foundUser.password);

        if(!match) return res.send("password is incorrect");

        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username
        }
        return res.redirect("/");
        
        }catch(err) {
        console.log(err);
        res.send(err);
 }});

module.exports = router;