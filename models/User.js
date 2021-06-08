const mongoose = require("mongoose");
const Comment = require("../models/Comment");
const Movie = require("../models/Movie.js");

const userSchema = new mongoose.Schema({

    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    
    password: { type: String, required: [true, "Please Provide A Password."], unique: true },
  
    active: {type: Boolean, default: true}
        
},{
    timestamps:true
});


const User = mongoose.model("User", userSchema);

module.exports = User;