//jshint eversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//body Paser has few mod es such as bodyPaser.json, bodyPaser.text

//the home page
app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  //num1 and num2 comes from index.html

  var  result = num1 + num2;

  res.send("The result of the calculation is "+ result);
});
// for BMI Calculator page
app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / (height*height);

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
