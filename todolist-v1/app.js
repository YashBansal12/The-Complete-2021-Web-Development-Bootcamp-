//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extende: true}));

app.use(express.static("public"));

app.get("/" , function(req , res){

   // var currentDay = today.getDay();
   // var day = "";

   // if(currentDay === 6 || currentDay === 0){
   //   day = "Weekend";
   //  // res.write(__dirname + "/weekend.html");
   // }else {
   //  // res.write("<p>it is not the weekend</p>");
   //  // res.write("<h1>Boo! I have to work!</h1>");
   //  // res.send();
   //  day = "Weekday";
   //  // res.sendFile(__dirname + "/weekday.html");
   // }

   // switch (currentDay) {
   //   case 0:
   //      day = "Sunday";
   //      break;
   //   case 1:
   //      day = "Monday";
   //      break;
   //   case 2:
   //      day = "Tuesday";
   //      break;
   //   case 3:
   //      day = "Wednesday";
   //       break;
   //   case 4:
   //      day = "Thursday";
   //      break;
   //   case 5:
   //      day = "Friday";
   //      break;
   //   case 5:
   //      day = "Saturday";
   //      break;
   //   default:
   //   console.log("Error: current day is equal to: " + currentDay);
   // }

   let day = date.getDate();
   res.render("list", {listTitle: day , newListItems: items});
});

 app.post("/", function(req, res){

   let item = req.body.newItem;

   if(req.body.list === "Work"){
     workItems.push(item);
     res.redirect("/work");
   }else{
      items.push(item);
      res.redirect("/");
   }

 })

 app.get("/work" , function(req , res){
   res.render("list" , {listTitle: "Work List", newListItems: workItems});
 });

 app.post("/work" , function(req ,res){
   let item = req.body.newItem;
   workItems.push(item);
   res.redirect("/work");
 });

 app.get("/about", function(req,res){
   res.render("about");
 });


app.listen(3000 , function(){
  console.log("Server saterted on port 3000.");
})
