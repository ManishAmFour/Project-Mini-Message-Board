const express = require("express");
const homeRoute = express.Router();
const homeController = require("../controller/homeController");

homeRoute.get("/", homeController);

module.exports = homeRoute;
