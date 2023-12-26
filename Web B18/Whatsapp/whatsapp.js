var arr=[
    {name:"gf1",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"}
    ,{name:"gf2",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"}
    ,{name:"gf3",img:"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"}
];
var clutter=" ";
arr.forEach(function(){
    clutter +=``
})
var contacts=document.querySelector("#contacts");
contacts.innerHTML=clutter;

contacts.addEventListener("click",function(dets){
    document.querySelector("#right h1").innerHTML=`${arr[dets.target.id].name}`
    document.querySelector("#sel-contact").style.background
    // console.log(arr[dets.target.id].name)

})