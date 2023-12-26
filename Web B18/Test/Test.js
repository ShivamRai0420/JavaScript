var h1=document.querySelector("h1")
h1.addEventListener("click",function(){
    // console.log("hwy")
    h1.style.color="red"
    h1.innerHTML="hello"
    h1.style.backgroundColor="black"
})
// h1.style.color="red"
// h1.style.backgroundColor="black"


                    // Bulb
var bulb=document.querySelector("#bulb")
var btn=document.querySelector("button")

var flag=0
btn.addEventListener("click",function(){
    if(flag==0){

        bulb.style.backgroundColor="yellow"
        btn.innerHTML="Off"
        flag=1;
    }
    else{
        bulb.style.backgroundColor="transparent"
        btn.innerHTML="On"
        flag=0

    }

})

                // BOXES
var box=document.querySelector("#box")
var flag2=0
box.addEventListener("click",function(){
    if(flag2==0){

        box.style.backgroundColor="yellow";
        flag2=1;
    }
    else{
        box.style.backgroundColor="red";
        flag2=0;
    }
}) 

// gsap.to("#box",{
//     x:0,
//     duration:6,
//     x:800,
// })
gsap.from("#box",{
    x:0,
    duration:6,
    backgroundColor:"yellow",
    x:800,
})
