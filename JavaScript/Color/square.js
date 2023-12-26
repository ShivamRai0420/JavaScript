document.querySelector("button")
.addEventListener("click",function(){
    var red=Math.floor(Math.random()*255)
    var green=Math.floor(Math.random()*255)
    var blue=Math.floor(Math.random()*255)

    document.querySelector("#square").style.backgroundColor=(`rgb(${red},${green},${blue})`);
})