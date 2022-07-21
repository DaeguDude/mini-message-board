var express = require("express");
var messages = require("./index").messages;
var router = express.Router();

// When new router is met, render a view called 'form'
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  const messageUser = req.body.author;
  const messageText = req.body.messageText;
  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

module.exports = router;
