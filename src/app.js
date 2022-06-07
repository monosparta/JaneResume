require('dotenv').config()
const express = require("express");
const cors = require("cors");
const session = require('express-session')
const passport = require('passport')

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const router = require("./routes/index");
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
