const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

passport.use(new GoogleStrategy({}));

app.listen(3000);