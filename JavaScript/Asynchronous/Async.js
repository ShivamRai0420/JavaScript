//Synchronous= Work done one by one
//Asynchronous=work start together but get resp whatever complete 1st. (Take less time).
// ex. setTimeOut,Interval,promises. etc
//Syntax= setTimeout(function(){},5000)

// console.log("5 sec bad chlna")
// setTimeout(function(){
//     console.log("hello")
// },5000)                     //This is called CALLBACK fun.

// JS isn't Asynchronous.
//Event loop= Communication b/w Mean and Side stack.

// console.log("hello1")
// console.log("hello2")
// setTimeout(function(){          // Async, Side stack me tha isliy last me print hua.
//     console.log("hello3")
// },0)
// console.log("hello4")

//Proise=Promise inside promise
var ans=new Promise(function(res,rej){
    return res("sabse phle ghr aao")
})
var p2=ans.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("gate kholo aur lgao")
    })
})
p2.then(function(data){
    console.log(data);
})
//Async await= catch aur se bachne k liye.
async function abcd(){
    let raw=await fetch('https://randomuser.me/api/');
    let ans=await raw.json();
    console.log(ans);
}
abcd();

