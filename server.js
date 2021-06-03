const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const movies = require('./models/movie_model.js');
const PORT = 3000;

app.get('/movies/:movieIndex', function(req, res){
    res.render('show.ejs');
});

// routes/controllers
// show route
// this route will catch GET requests to /movies/anyValue
// and respond with a single movie
app.get('/movies/:movieIndex', (req, res) => {
    res.send(movies[req.params.movieIndex]);
});
// index route
// this route will catch GET requests to /fruits
// and respond with all the fruits
app.get('/movies/', (req, res) => {
    res.send(movies);
});

// create route
// this route will catch POST requests to /fruits
// and, after creating new data, respond by redirecting
// the user to the index route
app.post('/movies/', (req, res) => {
    if(req.body.goodMovie === 'on'){
        req.body.goodMovie = true;
    } else {
        req.body.goodMovie = false;
    }
    movies.push(req.body);
    console.log(movies);
    res.send('data received');
});













app.listen(PORT, () => { 
    console.log('do this thing')
});
