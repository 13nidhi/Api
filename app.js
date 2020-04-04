var express = require("express");
var app = express();
var request = require("request");

app.get("results", function(req, res){
    res.send("hello its working!!!");
});


app.listen(5090, function(){
    console.log("Movie app  is satrted");
});
