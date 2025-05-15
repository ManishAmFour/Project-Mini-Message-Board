let express = require("express");
let index = express.Router();

const initiation = (req, res, next) => {
  console.log("home page initiated");
  //res.send("hello bhai chal gaya main");
};

index.use(initiation);

module.exports = index;
