var express = require('express');
var router = express.Router();
const User = require('../model/user');
const Product = require('../model/product');

router.post('/add', function(req, res, next) {
    const user = req.body;
    console.log(user);
   
    req.app.locals.db.collection("orders").insertOne(user)
    .then(result =>{
    console.log("result från db", result);
    res.json(result);
    })
   
});


router.get('/all', function(req, res, next) {

    req.app.locals.db.collection("orders").find().toArray()
    .then(result => {
    console.log("result from get users" ,result);
    res.json(result);
  })
    
});

module.exports = router;