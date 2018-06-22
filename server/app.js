const express = require("express");
const app = express();

app.get('/login', () => {
  console.log("hello");
});

app.listen(3000);