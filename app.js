var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var stepsRouter = require("./routes/steps");
var authRouter = require("./routes/auth");
var adminRouter = require("./routes/admin");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/steps", stepsRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
module.exports = app;
