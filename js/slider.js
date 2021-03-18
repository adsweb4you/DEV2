var next  = document.querySelector(".arrow.right");
var prev  = document.querySelector(".arrow.left");

next.addEventListener("click", function (e) {
    var activeslider =   document.querySelector(".slider-item.active");
    activeslider.classList.remove("active"); 
    
  if(activeslider.nextElementSibling == null){
     document.querySelectorAll(".slider-item")[0].classList.add("active");
  }else{
      activeslider.nextElementSibling.classList.add("active");
  }
    
})

prev.addEventListener("click", function (e) {
    var activeslider =   document.querySelector(".slider-item.active");
    activeslider.classList.remove("active"); 
    
  if(activeslider.previousElementSibling == null){
     var lastel =  document.querySelectorAll(".slider-item");
     document.querySelectorAll(".slider-item")[lastel.length - 1].classList.add("active");
  }else{
      activeslider.previousElementSibling.classList.add("active");
  }
    
})