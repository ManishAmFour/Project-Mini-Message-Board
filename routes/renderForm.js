const express = require("express");
const renderForm = express.Router();
const renderControl = require("../controller/renderController");

renderForm.get("/new", renderControl);

module.exports = renderForm;
