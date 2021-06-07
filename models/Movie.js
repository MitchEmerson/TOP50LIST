const mongoose = require("mongoose");
const Comment = require("../models/Comment.js");
const User = require("../models/User.js");

const movieSchema = new mongoose.Schema(
    {
        title: {type: String},
        director: {type: String},
        writer: {type: String},
        actors: [{type: String}],
        imgUrl: [{type: String}],
        challenged: {type: Boolean, default: false},
        
        
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment", unique: true}, ]
    },
    {
        timestamps: true,
    }
)

const Movie = mongoose.model("Movie", movieSchema);






module.exports = Movie;





























