var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

var user = process.env.MONGODB_USERNAME;
var password = process.env.MONGODB_PASSWORD ;
var host = process.env.MONGODB_HOST;
var databasename = process.env.MONGODB_DATABASE;
var dbport = process.env.MONGODB_PORT
var port = process.env.PORT || 3000;

var url = "mongodb://" + user + ":" + password + "@" + host + ":" + dbport + "/"; 

// Initialize connection once
MongoClient.connect(url, function(err, database) {
  if(err) throw err;

  db = database.db(databasename);

  // Start the application after the database connection is ready
  app.listen(port);
  console.log("Listening on port " + port );
});

// Reuse database object in request handlers
app.get("/", function(req, res) {
  res.send ("Displaying results from database " + databasename);
  db.collection(databasename).find({}).toArray(function(err, result) {
      if(err) throw err;
      console.log(result);
	res.send(JSON.stringify(result));	
    });
  });
