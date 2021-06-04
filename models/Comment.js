const mongoose = require("mongoose");
const User = require("../models/User.js")
const Movie = require("../models/Movie.js")

const commentSchema = new mongoose.Schema(
    {
          
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment", unique: true}, ]
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
