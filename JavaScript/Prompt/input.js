document.querySelector("button")
.addEventListener("click",function(){
    var ans=prompt("naam btao")
    document.querySelector("#names").innerHTML
    +=`<h3> ${ans} </h3>`;
});
// event bubbling
document.querySelector("names")
.addEventListener("click",function(maakda){
    console.log(maakda.target)
    maakda.target.style.color="red"


});