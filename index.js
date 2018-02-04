// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "JAy Company Inc", address: "Valley 345" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var query = { address: "Highway 37" };
//     dbo.collection("customers").find(query).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").find().limit(5).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { "address": "Valley 345" };
    var newvalues = { "name": "Mickey", "address": "Canyon 123" };
    dbo.collection("customers").replaceOne(myquery,
        newvalues,
        function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
});