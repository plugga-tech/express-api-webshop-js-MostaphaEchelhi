var express = require('express');
var router = express.Router();
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');

//skapa en användare
//logga in användare
// data ska skickas till mongoDB
//koppla produkt till användare



/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection("users").find({},{projection: {password:0}}).toArray()
  .then(result => {
    console.log("result from get users" ,result);
    res.json(result);
  })
});


//Hämta user med id
router.get('/:userId', function(req, res, next) {
  userId = req.params.userId;
  console.log(userId);

  req.app.locals.db.collection("users").findOne({"_id": new ObjectId(userId)})
  .then(result => {
    console.log("hitta user", result);

    res.json(result);
  })

});



// lägg till user
router.post('/add', function(req, res, next) {
  let newUser = {name: req.body.name};
  let userEmail = req.body.email;
  newUser.email = userEmail;
  let passwordToSave = crypto.SHA3(req.body.password).toString();
  newUser.password = passwordToSave;

  console.log("new user", newUser);

  req.app.locals.db.collection("users").insertOne(newUser)
  .then(result => {
    console.log("result från db", result);
    res.json(result);
  })
})


//logga in user
router.post('/login', function(req, res, next) {
  const {email, password } = req.body;
  console.log(email, password);

  req.app.locals.db.collection("users").findOne({email})
  .then(result => {
    if (result && crypto.SHA3 (password).toString() === result.password) {
        res.status(201).json({email: result.email, password: result.password});
        console.log(email,password);
      } else {
        res.status(401).json("OPSS")
      }
  })
})
module.exports = router;
