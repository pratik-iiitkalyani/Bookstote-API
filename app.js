// import Express
const Express = require("express");

// setup server port
const Port = process.env.port || 4000;

// import body parser
const BodyParser = require("body-parser");

// import mongoose
const Mongoose = require("mongoose");

// Initialize the app
const App= Express();

// Import routes
// Use Api routes in the App
//app.use('/api', apiRoutes);

App.use(BodyParser.urlencoded ({
    extended: false
}));

// configuration of body parser to handle post request
App.use(BodyParser.json());

// // connect to Mongoose
Mongoose.connect("mongodb+srv://admin:admin@cluster0-2cqya.mongodb.net/BOOKSTORE?retryWrites=true&w=majority",{useNewUrlParser : true});
const Db = Mongoose.connection;

// Use Api routes in the App
const ApiRoutes = require("./routes/route")(App)


//lunch api to listen on specified port
App.listen(Port, (req, res) => {
	console.log("server running on port" + " " + Port);
});
