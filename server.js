const express = require('express');
const router = express.Router;
router.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override');
router.use(methodOverride('_method'));
const movies = require('./models/movie_model.js');
const moviesController = require('./controllers/moviess_controllers.js');
router.use('/movies', moviesController);

const PORT = 3000;















router.listen(PORT, () => { 
    console.log('do this thing')
});
