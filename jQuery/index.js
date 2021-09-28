
// $(document).ready(function()
// {
//   $("h1").css("color","red");
// });

// Changing Text attributes

// $("h1").text("Hello!");
// $("button").text("Don't Click Me");
// $("button").html("<em>Don't Click Me</em>");

// Add events such as Clicks

// $("h1").click(function(){
//   $("h1").css("color","purple");
//  });

// $(document).keydown(function(event){
//   // console.log(event.key);
//   $("h1").text(event.key);
// });

// $("h1").addClass("big-title margin-50");
// $("button");

// $("img").attr("src");
// $("a").attr("href" , "https://www.yahoo.com");

//Using JavaScript

// for(var i = 0 ; i < 5 ; i++)
// {
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color = "purple";
// });
// }

//Using JQuery

// $("button").click(function()
// {
//   $("h1").css("color" , "purple");
// });

// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });
//
// $("h1").on("mouseover", function(){
//   $("h1").css("color" , "purple");
// })


//Animations with jQuery
$("button").on("click" , function(){
   // $("h1").hide();
   // $("h1").toggle();
   // $("h1").fadeOut();
   // $("h1").fadeToggle();
   // $("h1").slideUp();
   // $("h1").slideDown();
   // $("h1").slideToggle();
   // $("h1").animate({opacity:0.5});
   // $("h1").animate({margin: "20%"});
   $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
