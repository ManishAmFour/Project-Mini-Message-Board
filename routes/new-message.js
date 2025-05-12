let express = require("express");
let newMessage = express.Router();

const popUp = (req, res) => {
  console.log("message");
};

newMessage.use(popUp);

module.exports = newMessage;
