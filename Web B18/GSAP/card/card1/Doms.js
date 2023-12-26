//Doms
// selection of elem, html change, eventlistener

var head =document.querySelector("#head")
// var head=document.querySelectorAll("#head")

// var head=document.getElementById("#head");
// head.innerHTML="sdfghj"
// head.style.color="red"

head.addEventListener("click",function(){
    head.style.color="red";
})