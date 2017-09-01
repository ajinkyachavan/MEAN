const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mean-demo");


var nameSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dataid: String
});

/*
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});
*/
var User = mongoose.model("User", nameSchema);

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});


app.post("/addname", (req, res) => {
 // console.log(req.body)
  var myData = new User({name:req.body.name, email:req.body.email, phone:req.body.phone, dataid:req.body.dataid});
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
 });


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));





