var express = require('express');
var router = express.Router();
const crypto = require("crypto-js");


//skapa en användare
//logga in användare
// data ska skickas till mongoDB
//koppla produkt till användare



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
