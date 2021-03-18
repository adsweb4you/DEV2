
// // გაქრობის ეფექტი opacity
// $(".btn-danger").click(function (e) { 
//   e.preventDefault();
//   $("img").fadeOut("slow");
// });

// // გამოჩენის ეფექტი opacity
// $(".btn-success").click(function (e) { 
//   e.preventDefault();
//   $("img").fadeIn("slow");
// });


// // გამოჩენა გაქრობის ეფექტი opacity
// $(".btn-warning").click(function (e) { 
//   e.preventDefault();
//   $("img").fadeToggle("slow");
// });

 
 

 // გაქრობის ეფექტი slide
// $(".btn-danger").click(function (e) { 
//   e.preventDefault();
//   $("img").slideUp("slow");
// });

// // გამოჩენის ეფექტი slide
// $(".btn-success").click(function (e) { 
//   e.preventDefault();
//   $("img").slideDown("slow");
// });


// // გამოჩენა გაქრობის ეფექტი slide
// $(".btn-warning").click(function (e) { 
//   e.preventDefault();
//   $("img").slideToggle("slow");
// });

$(".btn-success").click(function () { 
 
  $("img").animate({
    "width":"50%",
    "borderRadius":"50px",
 
  }, 5000, function () {
    alert("ანიმაცია დამთავრდა")
  })
  
});

$(".btn-warning").click(function (e) { 
 
  e.preventDefault();
  $("img").stop();
});



$(".btn-info").click(function () { 
 
  $(".col-md-4").animate({
    "height":"340px",
    "borderRadius":"25px"
  }, 2000, function(){
    $("form.p-3").animate({
      "opacity":1,
      "pointerEvents":"all"
    }, 1000);
    $(".btn-info").fadeOut("fast");
  })
  
});


var childs  = $(".parents").children(".name");

// childs.css(
//   "background-color","red", 
//   "color","green",
//   "padding","20px"
// )


childs.css("font-size", "25px")


var pare = $(".name").parents();

var sibl = $('p').not('.cont')

console.log(sibl);