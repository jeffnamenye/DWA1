//This sets up contant express module
const express = require('express');

// This sets up contant body parser module
const bodyParser = require('body-parser');

//This is express functionality
const app = express();

//sets the port to 3000
const port = 3000;

//bodyParser to use text as json
app.use(bodyParser.json());

 //bodyParser to use text as url to encode data
 app.use(bodyParser.urlencoded({
   extended : true,
 }));

 
