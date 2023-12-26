// selection
// text chnge and html chnge
// changing CSS of element
// event listener

// var abc=document.querySelector("h1").innerHTML="please sona nhi"
// var abc=document.querySelector("h1").textContent="hello"
// var a=document.querySelector("h1").style.color="red"
// var abc=document.querySelector("h1").style.backgroundColor="yellow"

// var abc=document.querySelector("h1").addEventListener("click",function(){
//     document.querySelector("h1").style.color="red"
// })
// console.log(a);

var circle=document.querySelector("#circle")

document.querySelector("#on")
.addEventListener("click",function(){
    circle.style.backgroundColor="yellow"

})
document.querySelector("#off")
.addEventListener("click",function(){
    circle.style.backgroundColor="white"

})
