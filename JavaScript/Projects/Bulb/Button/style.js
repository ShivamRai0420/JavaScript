var circle= document.querySelector("#circle");
var btnON= document.querySelector("#on");
var btnOFF= document.querySelector("#off");

btnON.addEventListener("click",function(){
    circle.style.backgroundColor="yellow"
})

btnOFF.addEventListener("click",function(){
    circle.style.backgroundColor="white"
})