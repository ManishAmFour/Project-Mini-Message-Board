let express = require("express");
const homeRoute = require("./routes/homeRoute");
const renderForm = require("./routes/renderForm");
const processRender = require("./routes/processRender");
let path = require("path");

const server = express();
const PORT = 5342;

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "./views"));
server.use(express.urlencoded({ extended: true }));

server.use(processRender);
server.use(renderForm);
server.use(homeRoute);

server.listen(PORT);
