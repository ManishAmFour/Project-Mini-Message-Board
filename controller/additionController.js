const additionOfData = require("../models/addingTheData");

const additionControl = async (req, res) => {
  await additionOfData(req.body.messageText, req.body.authorsName, new Date());
  res.redirect("/");
};

module.exports = additionControl;
