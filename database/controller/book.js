// bookstoreController.js

// Import bookstore model
const Bookstore = require('../models/book');

// Handle create contact actions
exports.create = function(data) {
    return new Promise(async function(resolve, reject) {
        let book = new Bookstore(data);
        const response = await book.save()
        resolve(response)

    });

}

// Handle index action
exports.getAllUser = function(data) {
    return new Promise(function(resolve, reject) {
        console.log("data", data);
        Bookstore.find({}, function(err, bookstores) {
            if (err)
                reject(err)
            else {
                console.log("data retrive success :", bookstores)
                resolve(bookstores);
            }
        });
    });
};

// Handle view contact info
exports.getAllUserById = function(params) {
    return new Promise(function(resolve, reject) {
        console.log("data", params);
        Bookstore.findById({ "_id": params.id }, function(err, bookstore) {
            if (err)
                reject(err);
            else {
                console.log('Bookstore details are loading.......');
                resolve(bookstore)
            };
        })
    });
};


// Handle update bookstore information
exports.updateById = function(params, data) {
    return new Promise(function(resolve, reject) {
        const bookstore = new Bookstore(data);
        bookstore.save(params, function(err, bookstore) {
            if (err)
                reject(err);
            else {
                console.log("data updated successfully", bookstore)
                resolve(bookstore)
            }

        });
    });
}


// Handle delete operation
exports.deleteById = function(data) {
    return new Promise(function(resolve, reject) {
        console.log("data", data)
        Bookstore.findByIdAndRemove(data.id, function(err, bookstore) {
            if (err)
                reject(err);
            else {
                console.log("data deleted successfully", bookstore)
                resolve(bookstore)
            };
        });
    });
}