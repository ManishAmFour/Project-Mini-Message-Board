let express = require("express");
let index = require("./routes/index");
let newMessage = require("./routes/new-message");
let path = require("path");

const server = express();
const PORT = 8000;

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "./views"));

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

server.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    link: "/new",
  });
});

server.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

server.post("/new", express.urlencoded({ extended: true }), (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorsName,
    added: new Date(),
  });
  res.redirect("/");
});

server.listen(PORT);
