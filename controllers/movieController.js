const express = require('express');
const router = express.Router();
const db = require('../models');


//routes/controllers
// show route
// this route will catch GET requests to /movies/anyValue
// and respond with a single movie
router.get('/:movieIndex', function(req, res){
    res.render('show.ejs');
});


router.get('/:movieIndex', (req, res) => {
    res.send(movies[req.params.movieIndex]);
});
// index route
// this route will catch GET requests to /fruits
// and respond with all the fruits
router.get('/', (req, res) => {
    res.send(movies);
});

// create route
// this route will catch POST requests to /fruits
// and, after creating new data, respond by redirecting
// the user to the index route
router.post('/', (req, res) => {
    if(req.body.goodMovie === 'on'){
        req.body.goodMovie = true;
    } else {
        req.body.goodMovie = false;
    }
    movies.push(req.body);
    console.log(movies);
    res.send('data received');
});

// delete route
// this route will catch DELETE requests to /fruits/anyValue
// and, after deleting data, respond by redirecting
// the user to the index route
router.delete('/:movieIndex', (req, res) => {
    // remove the item from the array
   movies.splice(req.params.movieIndex, 1);
   // redirect back to index route
   res.redirect('/');
});

// edit route
// this route will catch GET requests to /fruits/anyValue/editForm
// and respond by rendering a form together with a fruit object
router.get('/:movieIndex/editForm', (req, res) => {
	res.render('edit.ejs', {
        // the fruit object
        oneMovie: movies[req.params.movieIndex],
         // the index of the fruit object in the array
        index: req.params.fruitIndex
    });
});

router.put('/:movieIndex', (req, res) => {
    if(req.body.goodMovie === 'on'){
        req.body.goodMovie = true;
    } else {
        req.body.goodMovie = false;
    }
    // in our fruits array, find the index that is specified in the url (:fruitIndex) and overwrite the object with req.body (the form data)
	movies[req.params.movieIndex] = req.body;
	res.redirect(`/movies/${req.params.movieIndex}`);
});

module.exports = router;