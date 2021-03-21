
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


$(".tabs li").click(function (e) { 
  e.preventDefault();
  $(".tabs").find(".active").removeClass("active");
  $(this).addClass("active");
});


$(".nav-link").click(function (e) { 
  e.preventDefault();
  var page = $(this).attr('href');

  $("#load").load('resp.html')

  // $.ajax(
  //   {
  //     type:"GET",
  //     url: page,
  //     success: function (resp) {
  //      $("#load").html(resp)
  //     },
  //     error:function (resp) {
  //       alert("სისტემური  შეცდომა!")
  //     }
  //   }
  // )
 

});


 

$(".contact").submit(function (e) { 
  e.preventDefault();
 var date =   $(this).serialize();

$.ajax({
  type: "get",
  url: "slider.html",
  data: date,
 
  success: function (response) {
     $(".contact").addClass("succes")
  }
});
});



// const langs = localStorage.getItem("lang");

// var lang  = function lang(lang) {
//    if(lang == "ka"){
//      return {
//        home:"მთავარი",
//        about:"ჩვენ შესახებ",
//        contact:"კონტაქტი"
//      }
//    }

//    if(lang == "en"){
//     return {
//       home:"Home",
//       about:"About Us",
//       contact:"Contact"
//     }
//   }

// }

// $(".lang a").click(function (e) { 
//   e.preventDefault();
//   var leng = $(this).data('lang');
//   localStorage.setItem("lang", leng);


//   setlang(leng);

// });


// function setlang(langs) {
//   $("#home").text(lang(langs).home);
//   $("#about").text(lang(langs).about);
//   $("#contact").text(lang(langs).home);
// }

// $(document).ready(function () {
//   setlang(langs);
// });

// localStorage.clear();

//sessionStorage.setItem("sdsa", "sadas")

localStorage.setItem("name", 45);
console.log(localStorage.getItem("name"))