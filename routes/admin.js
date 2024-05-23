const stepMustExist = require("../guards/stepMustExist");
var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
// var userMustBeLoggedIn = require("../guards/userMustBeLoggedIn");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;

router.get("/", function (req, res, next) {
  db("SELECT * FROM steps;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
