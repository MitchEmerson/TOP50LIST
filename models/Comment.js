const mongoose = require("mongoose");
const User = require("../models/User.js")
const Movie = require("../models/Movie.js")

const commentSchema = new mongoose.Schema(
    {
        movieIndex: mongoose.Schema.Types.Number,
        userId: mongoose.Schema.Types.ObjectId, 
        comment: mongoose.Schema.Types.String, 
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
