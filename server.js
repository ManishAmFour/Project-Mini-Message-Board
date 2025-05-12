let express = require("express");
let index = require("./routes/index");
let newMessage = require("./routes/new-message");

const server = express();
const PORT = 8000;

server.use("/new", newMessage);

server.use("/", index);

server.listen(PORT);
