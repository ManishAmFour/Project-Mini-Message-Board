let express = require("express");
let index = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charls",
    added: new Date(),
  },
];

const initiation = (req, res, next) => {
  console.log("home page initiated");
  //res.send("hello bhai chal gaya main");
};

index.use(initiation);

module.exports = index;
