// get html & css DOMRectReadOnlythen get data (array) ready in JS 
// loop through the  data and make the clutter of it and then just 
var arr=[{name:"harshal",age:23,desc:"asdfghjk",status:"friends"},
    {name:"harsharma",age:24,desc:"asdfghjk",status:"stranger"},
    {name:"varsha",age:29,desc:"asdfghjk",status:"friends"},
    {name:"shivam",age:21,desc:"asdfghjk",status:"friends"}
];
var clutter="";
arr.forEach(function(elm){
    clutter +=`<div id="card">
    <div id="img_card">

    </div>
    <h1>${elm.name}Danie Danials</h1>
    <p>${data.desc}Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae!</p>
    <h3 id="status">Strangers</h3>
    <button>${data.status==="friends" ? "remove" : "htaa"}add friend</button>
</div>`
})
document.querySelector("#card").innerHTML=clutter;

document.querySelector(#card)
.addEventlistener("click",function())
function showcards