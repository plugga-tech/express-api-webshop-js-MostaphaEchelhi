var express = require('express');
var router = express.Router();
const fs = require("fs");


//10 producter
//ska gå och köpa product (lägga till i varukorgen)
//lagervärdet i databasen ska minskas när man skickar iväg en order.
//info om producterna ska displyas, namn, bild och pris.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(product);
  fs.readFile("product.json", function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data)
      return;
    }
  })
});

module.exports = router;
