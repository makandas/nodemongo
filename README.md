# nodemongo
A Node JS application that uses MongoDB as database and it can be dockerized. You can install Mongo databese locally in your system. Create a db user and password. You can refer this link for more details : https://hevodata.com/blog/install-mongodb-on-ubuntu/. You can test the application with your created user, pass as below :

-------------------------------------------------------------------------
mongo mongodb://localhost:27017/admin -u admin -p password
MongoDB shell version v3.4.17
connecting to: mongodb://localhost:27017/admin
MongoDB server version: 3.4.17
Server has startup warnings:
....
> db.admin.distinct("name")
[ "malar" ]
> exit
bye
-------------------------------------------------------------------------
root@tofu1:~# mongo mongodb://localhost:27017 -u admin -p password --authenticationDatabase "admin"
MongoDB shell version v3.4.17
connecting to: mongodb://localhost:27017
MongoDB server version: 3.4.17
> exit
bye
-----------------------------------------------------
Node JS app :

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://admin:password@localhost:27017/admin", function (err, db) {
        console.log("connected to db");

     if(err) throw err;

     //Write databse Insert/Update/Query code here..

});
~       



