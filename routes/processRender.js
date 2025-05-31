const express = require("express");
const processRender = express.Router();
const additionControl = require("../controller/additionController");

processRender.post("/new", additionControl);
module.exports = processRender;
