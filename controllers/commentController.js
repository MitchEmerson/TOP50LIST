const comment = require("../models/Comment.js");





router.get('/newComment', (req, res) => {
    res.render('commentViews/newComment.ejs'
   )});


module.exports = router;