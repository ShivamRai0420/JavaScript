var arr=["https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400",
"https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400","https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"];

clutter="";
arr.forEach(function(elm){
    clutter +=`<div class="story">
    <div class="photo">
       <img src="https://images.unsplash.com/photo-1652824109905-38ae74f0d347?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400" alt="">
       </div>
       <div id="chhotupic">
       </div>
</div>`
})