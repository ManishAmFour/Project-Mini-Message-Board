const retrieval = require("../models/retrieval");

const homeController = async (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: await retrieval(),
    link: "/new",
  });
};

module.exports = homeController;
