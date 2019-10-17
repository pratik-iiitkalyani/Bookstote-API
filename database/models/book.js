// Model

var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

// Schema
var BookstoreSchema =  new Schema({
	name : { type : String},
	author : { type : String }
});

// export bookstore model
const Bookstore = module.exports = Mongoose.model('bookstore', BookstoreSchema);

module.exports.get = function (callback, limit) {
    Bookstore.find(callback).limit(limit);
}


