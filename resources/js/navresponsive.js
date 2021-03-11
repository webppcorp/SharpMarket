

      // PLEASE DONT CHANGE THIS FILE //


window.onscroll = function() {stickynav()};

var mainnav = document.getElementById("mainnav-dskt");
var mainnavres = document.getElementById("mainnav-res");
var category = document.getElementById("category");
var sticky = mainnav.offsetTop;

function stickynav() {
  if (window.pageYOffset > sticky) {
    mainnav.classList.add("sticky")
    mainnavres.classList.add("sticky");
  } else {
    mainnav.classList.remove("sticky");
    mainnavres.classList.remove("sticky");
  }
}






var winwidth = window.innerWidth;
var thinLine1 = document.getElementById("thinline1");


navrespone();

window.addEventListener("resize",function() {
  winwidth = window.innerWidth;
  navrespone();
});

function navrespone() {
  if (winwidth <= 990) {
    mainnavres.classList.remove("js--displayoff");
    category.classList.remove("js--displayon");
    mainnav.classList.remove("js--displayonblock");
    thinLine1.classList.remove("js--displayon");
    mainnavres.classList.add("js--displayon");
    category.classList.add("js--displayoff");
    mainnav.classList.add("js--displayoff");
    thinLine1.classList.add("js--displayoff");
  }
  else if (winwidth > 990) {
    mainnavres.classList.remove("js--displayon");
    category.classList.remove("js--displayoff");
    mainnav.classList.remove("js--displayoff");
    thinLine1.classList.remove("js--displayoff");
    mainnavres.classList.add("js--displayoff");
    category.classList.add("js--displayon");
    mainnav.classList.add("js--displayonblock");
    thinLine1.classList.add("js--displayon");
  } 
}