// all endpoint should be defined in this file

// Initialize express router
const Router = require("express").Router();


// default api response
Router.get('/', function(req, res) {
    res.json({
        status: 'API is Working properly',
        message: 'Welcome to the Bookstore!!',
    });
});

//Export API routes


//Import contact controller
const Bookstore = require('../database/controller/book');


module.exports = (Router) => {
    // bookstore routes
    Router.route('/create')
        .post(async function(req, res) {
            console.log('request', req.body);
            try {
                let data = req.body;
                let Response = []
                await Promise.all(data.map(async book => {
                    let savedBook = await Bookstore.create(book);
                }))
                res.send("Response");
            } catch (err) {
                res.send("error")
            }
        });




    Router.route('/getAllUser')
        .get(async (req, res) => {
            console.log('request', req.params);
            try {
                const Response = await Bookstore.getAllUser(req.params);
                console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
            }
        });





    Router.route('/getAllUserById/:id')
        .get(async (req, res) => {
            console.log('request', req.params);
            try {
                const Response = await Bookstore.getAllUserById(req.params);
                console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
            }
        });




    Router.route('/updateById/:id')
        .put(async (req, res) => {
            console.log('request', req.params);
            try {
                console.log("request", req.body)
                const Response = await Bookstore.updateById(req.params, req.body);
                console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
            }
        });




    Router.route('/deleteById/:id')
        .delete(async (req, res) => {
            console.log('request', req.params);
            try {
                const Response = await Bookstore.deleteById(req.params);
                console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
            }
        });
}