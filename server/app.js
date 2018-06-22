const express = require("express");
const passport = require("passport");
const OpenIDStrategy = require("passport-openid").Strategy;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.SECRET;
const app = express();

passport.use(
  new OpenIDStrategy({
    returnURL: 'http://localhost:3000/auth/openid/return',
    realm: 'http://localhost:3000/'
  },
  function(identifier, done) {
    return done(err, user);
    // User.findByOpenID({ openId: identifier }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

app.post('/auth/openid',
  passport.authenticate('openid'));

app.get('/auth/openid/return', 
  passport.authenticate('openid', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.listen(3000);