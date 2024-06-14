// $("h1").addClass("big-title");

// when you click on button change it to that key
// need keydown

// $("document").keydown(function(event){
//    $("h1").text(event.key);
// });

$("h1").on("mouseover", function(){
   $("h1").css("color","blue");
   $("h1").css("font-size","5rem");

});

$("h1").on("mouseout", function(){
   $("h1").css("color","black");
   
});











