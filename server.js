/* jshint esversion:6 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

let db = require('./models'); // functionally becomes db

let Users = db.Users;

app.post('/users', function (req, res) {
  Users.create({ username: req.body.username }) // create new instance of a User on the JS and DB side (build and save)
    .then(function (user) {
      res.json(user); // return user
    });
});

app.get('/users', function(req, res) {
  Users.findAll()
    .then(function (users) {
      res.json(users);
    });
});

app.listen(PORT, () => {
  db.sequelize.sync();
 console.log(`server running on ${PORT}`);
});