const stars = document.getElementById('stars');
const moon = document.getElementById("moon");
const mountains_1 = document.getElementById("mountains_1");
const mountains_2 = document.getElementById("mountains_2");
const river = document.getElementById("river");
const boat = document.getElementById("boat");
const mountains_3 = document.getElementById("mountains_3");
const nouvel = document.querySelector(".Nouvel");


window.onscroll = function(){
let scrollValue = scrollY;

stars.style.left = scrollValue + 'px';

moon.style.top = scrollValue*3 + "px";
mountains_1.style.top = scrollValue * 2 + "px";
mountains_2.style.top = scrollValue * 1.5 + "px";
mountains_3.style.top = scrollValue * 1.2 + "px";
river.style.top = scrollValue  + "px";
boat.style.top = scrollValue  + "px";
boat.style.left = scrollValue  + "px";
nouvel.style.fontSize = scrollValue  + "px";
console.log(scrollValue)
if (scrollValue >= 70 ){
  console.log('ok')
  nouvel.style.fontSize = 70 + "px";
  nouvel.style.position = 'fixed';
}
if(scrollValue >= 478){
  nouvel.style.display= 'none';
}else{
  nouvel.style.display = "block";
};

if (scrollValue >= 127 ){
  document.querySelector(".main").style.background =
    "linear-gradient(#376281,#10001f)";
}else{
  document.querySelector(".main").style.background =
    "linear-gradient(#200016,#10001f)";
}


};