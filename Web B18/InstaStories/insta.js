var arr=[
    "https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    "https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    "https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
    "https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",   
];
var clutter="";
arr.forEach(function(elm){
    clutter +=`<div class="story">
    <div id="userimage">
        <img src="https://images.unsplash.com/photo-1652487346675-908df8c01529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="">
    </div>
</div>`
})
document.querySelector(".stories").innerHTML=clutter;


var arr2=[
    {pic:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",username:"shivam"},
    {pic:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",username:"sgiv"}

];

var clutter2 ="";

arr2.forEach(function(elem){

    clutter2 +=`<h3 id="username">shivam</h3>
    <div id="post">
        <img src="https://images.unsplash.com/photo-1633187841127-8b3e776b6a41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
    </div>
    <div id="reaction">
        <i class="ri-heart-line"></i>
    <i class="ri-share-forward-line"></i>
    <i class="ri-discuss-line"></i>`
})

document.querySelector("#posts").innerHTML=clutter2;