var express = require('express');
var app = express();

app.use(express.static("public"))

app.use(express.static(__dirname + '/'));




app.get("/", function(req, res){
  console.log("HERE");
  res.render("index");
});


app.listen(process.env.PORT || 3000);