var btn=document.querySelector("button")
var h3=document.querySelector("#status")
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
    h3.textContent="friends"
    h3.style.color="green"
    btn.innerHTML="friends"
    flag=1;
    }

    else{
    h3.textContent="strangers"
    h3.style.color="red"
    btn.innerHTML="add friend"
    flag=0;
    }
})