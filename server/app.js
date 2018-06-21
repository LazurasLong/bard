const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.SECRET;
const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/auth/google",
  passport.authenticate("google", {
    scope: ['https://www.googleapis.com/auth/plus.login']
  })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

  // new GoogleStrategy({
  //   clientId,
  //   clientSecret,
  // }),
  // function(accessToken, refreshToken, profile, done) {
  //   console.log("hi");
  //   return done(err, user);
  // }

app.listen(3000);