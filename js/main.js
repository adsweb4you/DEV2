 var z, x, y, o;

 
 x = 74;
 y = 0;
 o = 0;
 
 var bool = true;  // boolean
 var bools = false;  // boolean
 var array = [];  //array
 var obj = {}; //object
 z // undefined
var fun = function(){};

 console.log(typeof(array));

 
 
 
 

 var jsp = '{"name":"natia"}'

 

 //პირველი მოძიებული სიტყვის ინდექსი
//  console.log(string.indexOf("პირველი"))

// მოძიებული სიტყვის (ბოლო) ინდექსი
//console.log(string.lastIndexOf("პირველი"))

// ითვლის სტრინგში სიმბოლების რაოდენობას
//console.log(string.length)

 //პირველი მოძიებული სიტყვის ინდექსი
 //console.log(string.search("პირველი"))

 //სტრინგში სიმბოლოების ჩანაცვლება
 //console.log(string.replace(/პირველი/g, "პირველიedited"))
 
 var string = "ჩემი პირველი ცვლადი პირველი"; //string
 
 //scice ჭრის ინდექსებით 1 პარამეტრი მარცხნიდან მეორე უარყოფითი პარამეტრი მარჯვნიდან, trim() 
 //შლის white space_ბს
 //console.log(string.slice(12, -7).trim())

 console.log(string[string.lastIndexOf("ი")])

 var unitstring = "text-danger";


 document.getElementById("output").innerHTML = "<p class='"+ unitstring +"' style='background-color:green'>" + "ტექსტი" + "</p>";

//  var z =  document.getElementById("input").value;

var y =  19.98;
var weight = 1.350;

var  sub = weight.toFixed(3) * y.toFixed(2);

console.log(sub.toFixed(2))

var User = {
    name:"სატესტო იუზერი",
    email:"info@gmail.com",
    mobail:568789898,
    str:"salkdjaskuwqie4789234723yh",
    age:24,
    type: 2,
    verified:true,
    address:{
        address1:"მისამართი N 21",
        address2:"მისამართი N 22",
    },
    addr:() => {
       console.log(User.verified) ;
    }
 
}

if(User.type == ""){
    diss.style.display =  "block"
}

var os = document.getElementById("userisn");

if(User.type == 1){
    os.style.display =  "block"
}


 

 
// for(var v = 0; v < Arra.length; v++){
 

//     for(var s = 0; s < Arra[3].arr.length; s++){
//     console.log(Arra[3].arr[s])
// }

// }

//შლის პირველ ელემნტს
//Arra.shift();
 

//შლის ბოლო ელემნტს
//Arra.pop();

// Arra[3][1].splice(4, 5);

// var slarray = Arra.slice(0, 1)


  //Arra.splice("1", "0", "ახალი ელემენტი");

var Arra = [
    {name:"iphone 10", color:"red"},
    {name:"iphone 10", color:"greed"},
    {name:"iphone11", color:"black"},
    {name:"iphone 10", color:"red"},
    {name:"iphone 10", color:"greed"},
    {name:"iphone11", color:"black"},
    {name:"iphone 10", color:"red"},
    {name:"iphone 10", color:"greed"},
    {name:"iphone11", color:"black"},
];
 

 
 

function findpro(val){
    
    function findin(index){
   
        return index.name.search(val) != -1;
    }


    console.log(Arra.filter(findin))
}


var namb = [4,70,180,90];


function els(a, b){
    return a - b;
}

console.log(namb.sort(els).reverse())


// Arra.forEach(allel)

// function allel(index){
//     document.getElementById("output").innerHTML += index
// }

 

var prod = [
    {name:"iphone 10",img:"img/img.png", price:500, color:"red"},
    {name:"iphone 7", img:"img/img.png", price:2333, color:"grey"},
    {name:"iphone 7", img:"img/img.png", price:5005, color:"black"},
    {name:"iphone 8", img:"img/img.png", price:5000, color:"white"},
]


function checkname(name, price_from, price_to ){
 
    function filt(els){
        if(price_from == null &&  price_to  == null){
            return els.name.search(name) != -1;
        }

        if(name == null){
            return els.price  > price_from && els.price  < price_to;
        }
        
      
   
    }

    
var finarr = prod.filter(filt)

     var load = document.getElementById("load");
     load.innerHTML = '';
 
for (let i = 0; i < finarr.length; i++) {
    const element = finarr[i];
  


    load.innerHTML += '<div class="col-md-3 card">'
    + '<img src="'+ element.img +'" class="card-img-top img-fluid" alt="...">'
    + '<div class="card-body">'
    + '<h5>' + element.name  + '</h5>'
    + '<p>' + element.price  + " ₾ " +  '</p>'
    + '</div>'
  + '</div>'

}

}

var tt = 14;
var ts = "str";
var z = "14";

if(tt === z || tt === z || tt === z){
 
}else if(tt > z){
 
}else{
 
}

 

var d = new Date();

// d.setDate(d.getDate() + 14)
 
// clock.innerHTML = d.getFullYear() + "/" + d.getDate() + "/" + d.getHours() + ":" + d.getMinutes()  +   ":" + d.getSeconds();
// clock.innerHTML = d.getDate();

// setTimeout( function() {
//     clock.innerHTML = d.getDate();
// }, 1000)
console.log(cs.style.strokeDashoffset);
setInterval(() => {

 

    if(Number(cs.style.strokeDashoffset) > 1 ){


        cs.style.strokeDashoffset  =  Number(cs.style.strokeDashoffset) - 100;
    }
  
}, 100);


var d = new Date("2000-06-25"); 

console.log(d);

const object = { 
    name:"loka", 
    lastname: "baiden", 
    birth: d,  
    email:"baiden@gmail.com"

}
 console.log(object); 

const day = d.getDate(); 

var now = new Date(); 
var newday =  now.getDate();  
const happy =  day - newday; 

var monthDiff = d.getMonth() - now.getMonth(); 

 

if (d.getMonth() == now.getMonth() && day == newday ) {  
    document.getElementById("web").innerHTML = '<div class="modal" tabindex="-1"> ' +
    '<div class="modal-dialog">' +
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<h5 class="modal-title">happy</h5>' +
        '</div>' +
        '<div class="modal-body">' +
         ' <p>დაბადებისდღეს გილოცავ ლოკა</p>' +
        '</div>' +
        '<div class="modal-footer">' +
         ' <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'  
 
}else{  
    var month = "შენს დაბადებისდღემდე დარჩა  : " +  monthDiff + " თვე და " + happy  + " დღე "; 
    document.getElementById("web").innerHTML = month;  
    if (monthDiff < 0 ) {  
        document.getElementById("web").innerHTML = "შენს დაბადებისდღემდე დარჩა  : " + 11 + " თვე და " + happy  + " დღე ";
    }
   
} 

// if(days < 0)        
// {
//     var year = d.getYear() - now.getYear();
//     year *= -1; 

//     var monthDiff = d.getMonth() - now.getMonth();

//     var daysDiff = d.getDay() - now.getDay();


//     if(monthDiff <= 0)
//     {
//         if(daysDiff > 0)
//         {
//         }

//         else
//         {
//             days += 365;
//         }
//     }

//     var extraDays = year / 4;
//     days = days + (year * 365) + extraDays;                
// } 

// else
// {
//     throw new FutureDateException();
// }


// days = Math.floor(Math.round(days));

// if(days === 365)
// {
//     days = 0;
// }

// if(days === 366)
// {
//     days = 1;
// }

// return days;

var ele = document.getElementById("load");
var tsl = document.getElementsByClassName("ts");
var quer = document.querySelectorAll("#load")
 

 quer[0].classList.add("text-center");
 quer[0].classList.remove("row");
 quer[0].classList.toggle("row");


 function togh(el){
     console.log( imgs.getAttribute('src'));
     imgs.setAttribute('src', 'img/logo.png')
     imgs.removeAttribute('src', 'img/logo.png')
    // el.classList.replace("btn-success", "btn-danger")
 
 }

  for (let l = 0; l < quer.length; l++) {
      const element = quer[l];
      element.style.padding = "25px"
  }

 var div  = document.createElement("div");
 var p = document.createElement("p");

//  var video = document.createElement("video");
//  video.setAttribute("src", "video/vid.mp4");
//  video.classList.add("myvideo");
//  video.autoplay = true;

// console.log(video)

 p.textContent = "შექმნილი ელემენტი";
div.appendChild(p);

 
 
var webs = document.getElementById("web");

 document.body.insertBefore(div, webs);



function creat() {
    var input  = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("form-control", "mb-3");
    outinput.appendChild(input);
    evs();
}


function evs() {
    var evs = document.getElementsByClassName("form-control");
    for (let is = 0; is < evs.length; is++) {
        const element = evs[is];
        element.addEventListener("dblclick", function (e) {
            this.remove();
        }) 
    }
}

var sibl = document.getElementById("sibl");
console.log(sibl.previousElementSibling);
console.log(sibl.nextElementSibling);
