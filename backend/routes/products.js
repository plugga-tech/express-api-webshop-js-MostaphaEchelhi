var express = require('express');
var router = express.Router();
const fs = require("fs");
const { ObjectId } = require('mongodb');


//10 producter
//ska gå och köpa product (lägga till i varukorgen)
//lagervärdet i databasen ska minskas när man skickar iväg en order.
//info om producterna ska displyas, namn, bild och pris.

/* GET home page. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection("products").find().toArray()
  .then(result => {
    console.log("result from get users" ,result);
    res.json(result);
  })
});


router.get('/:productsId', function(req, res, next) {
  productsId = req.params.productsId;
  console.log(productsId);

  req.app.locals.db.collection("products").findOne({"_id": new ObjectId(productsId)})
  .then(result => {
    console.log(result);

    res.json(result);
  })

});


router.post('/add', function(req, res, next) { 
  let Product = {name: req.body.name};
  let description = req.body.description;
  let price = req.body.price;
  let lager = req.body.lager;
  Product.description = description;
  Product.price = price;
  Product.lager= lager;
  console.log(Product);
  req.app.locals.db.collection("products").insertOne(Product)
  .then(result =>{
    console.log("result från db", result);
    res.json(result);
  })
})

module.exports = router;
