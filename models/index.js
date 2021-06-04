const mongoose = require('mongoose');
require('dotenv').config();
const dbURL = process.env.MONGODB_URI;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
 });
 mongoose.connection.on("disconnected", function(){
     console.log("Mongodb disconnected");
 });
 mongoose.connection.on("connected", function(){
     console.log("Mongodb connected");
 });
 mongoose.connection.on("error", function(err){
     console.log("Mongodb error: ", err);
 });













 module.exports = {
    User: require("./User"),
    Movie: require("./Movie"),
    Comment: require("./Comment")
}