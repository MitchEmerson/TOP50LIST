const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.MONGO_URI;
//const dbUrl = "mongodb://localhost:27017/TOP50LIST"

mongoose
	.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(function () {
		console.log("MongoDB connected! :)");
	})
	.catch(function (err) {
		console.log("MongoDB error :(");
		console.log(err);
	});

mongoose.connection.on("disconnected", function () {
	console.log("MongoDB disconnected :(");
});


    module.exports = {
    User: require("./User"),
    Movie: require("./Movie"),
    Comment: require("./Comment")
}