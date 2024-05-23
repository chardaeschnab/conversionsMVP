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

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.send({ message : "Paint Steps"})
// });

// GET steps list
router.get("/", function (req, res, next) {
  db("SELECT * FROM steps;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//GET steps by ID
router.get("/:id", stepMustExist, async (req, res) => {
  const getById = `SELECT * FROM steps WHERE id = ("${req.params.id}");`;

  try {
    const result = await db(getById);
    res.status(200).send(result.data[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});

// INSERT a new step into the DB
router.post("/", async (req, res, next) => {
  const query = ` INSERT INTO steps (Description, Next_1, Next_2, Next_3, Text_1, Text_2, Text_3) VALUES ("${req.body.Description}", "${req.body.Next_1}","${req.body.Next_2}","${req.body.Next_3}","${req.body.Text_1}","${req.body.Text_2}","${req.body.Text_3}");`;
  const select = `SELECT * FROM steps`;

  try {
    await db(query);
    const result = await db(select);

    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Update object in steps
router.put("/:id", stepMustExist, async (req, res) => {
  const put = `UPDATE steps SET Description ='${req.body.Description}',Next_1=${req.body.Next_1},Next_2=${req.body.Next_2},Next_3=${req.body.Next_3},Text_1='${req.body.Text_1}',Text_2='${req.body.Text_2}',Text_3='${req.body.Text_3}' WHERE id=${req.params.id};`;
  console.log(put);
  const select = `SELECT * FROM steps;`;
  try {
    await db(put);
    const result = await db(select);
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a step from the DB
router.delete("/:id", stepMustExist, async (req, res) => {
  const del = `DELETE FROM steps WHERE id = ${req.params.id}`;
  const select = `SELECT * FROM steps;`;
  try {
    await db(del);
    const result = await db(select);
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//write post endpoints for inserting steps into postman, refer to last week's projects
module.exports = router;
