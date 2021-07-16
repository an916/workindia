const express = require("express");
const app = express();
app.get("/",function(req,res){
  res.send("THANKS FOR VISITING US");
});
app.get("/main",function(req,res){
  res.sendFile(__dirname+"/main.html");
});

app.listen(3000,function(){
  console.log("server running on port 3000.");
});
