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

router.get('/:id', (req,res) => {
    db.Comment.findById(req.params.id, function(err,foundComment) {
        if(err) res.send(err);
     
        const context = {comment: foundComment}
        res.render('commentViews/edit.ejs', context)

    })
    
});    

router.put('/:id', (req,res) =>  {
    console.log(req.body.comment)
    db.Comment.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
        comment: req.body.comment
            },
        },
        { new: true },
        function (err, updatedComment) {
            if(err) return res.send(err); 
            console.log(err)
            return res.redirect('/');
        }
    );
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

router.delete('/:id', (req,res) => {
    db.Comment.findByIdAndDelete(req.params.id, function(err, deletedComment) {
        if(err) return res.send(err)
       return res.redirect("/")
    })

})


module.exports = router;






