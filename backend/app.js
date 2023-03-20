var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

var productRouter = require('./routes/product');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());

MongoClient.connect(process.env.MONGODB_URI)
.then(client => {
    console.log("DB är ok");

    const db = client.db("projekt1")
    app.locals.db = db;

})
.catch(err => console.log("err", err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', productRouter);
app.use('/users', usersRouter);

module.exports = app;
