// function
//  what=kuchh amount of code jo ek sath chalega aur chalne pr kuchh kam krega ,aise code ko bundle krke rkhne ko function khte h.
// grp of code which is bundle together to do somethingin a prgrm. you can reuse this grp of by just calling fun.
// why= to reuse,to grp code ,to make maintainable codebase,
// how=
// function statement
// function statement
// function statement
// function statement
// function statement
// function statement
// var=functional scope(es5 old js)
// let=block scope
// hoisting, channing,prototypal inheritance,currying
// console.log("a");

// Function call                    //Parameters and Arguments
// function dinner(){
//     console.log("a");
//     console.log("d");
//     console.log("v");
   
// }
// dinner();
// dinner();

// function adarsatkar(val){
//     // console.log("namaste");
//     console.log(val);  
// }
// adarsatkar("namaste");
// adarsatkar("hello");

// function abcd(a,b){                 //This is Parameters
//     console.log(a,b);  
// }
// adarsatkar(1,2);
// adarsatkar(1,2,3,4);        //ignore rest garbage -> This is Arguments


// function priceCalculator(price,discount=0)          //Default param is 0.
// {
//     console.log(price,discount);
//     console.log("Max="+Math.max(12,8));
//     console.log("Min="+Math.min(12,8));
//     console.log(Math.floor(12.8));
//     console.log(Math.ceil(12.8));
//     console.log(Math.abs(12.8));

// }
// priceCalculator(1200,20);

// priceCalculator(2300);
// // 1.
// var score=0;
// function increaseByFactor()
// {
//     score=(score*10)/2-(score+12);
//     console.log(score);
// }

// increaseByFactor()
// console.log(score);

// 2.
// var score=0;
// function abcd()
// {
//     score++
//     var score=12;
//     console.log(score);
// }
// abcd()
// console.log(score);

// 3.
// var score=1;
// function incabcd()
// {
//     score++;
//     console.log(score);

// }
// incabcd();

// function incabcd()
// {
//     score++;
//     console.log(score);

// }
// incabcd();

// function incabcd()
// {
//     score++;
//     console.log(score);

// // }
// incabcd();
// for(var i=0;i<5;i++)
// {
//     var ans= prm("num do");
//     if(score>5)
//     {
//         incabcd();
//     }
//     else
//     {
//         decabcd();
//     }
// }
// print()

// 09/05/2022      return keyword?  what,why,
// return=> Return to the place where u came from with value 

// 1
// function abcd()
// {
//     return 12;
// }
// // fun call
// var a=abcd();
// console.log(a);

// 2
// function abcd(a,b)
// {
//     return a*b;
// }
// fun call
// var a=abcd(1,2);
// console.log(a);

// // fat arrow implicit return 

// ()=>{
//     return a*b
// }


// function abcd(a,b){
//     return a*b;
// }
// var ans=abcd(3,4);
// console.log(ans);

// array=   collection of values, ex [1,"1",'1',"skr",true].
// []  blank array
// [1] with single value
// [1,2,3] with multiple
// [1,"sle",2.3,true]  "ye ab nrml hai"

var arr=[1,2,3,4];
// arr.push(1);             //Add from last
// arr.pop();               //remove from last              
// arr.shift();             //remove from start
// arr.unshift(10);         //Add from start
// console.log(arr);

// user se naam puchhte rho jbtk exact tym na ho jay
// var frnds=[];
// var frnam=prompt(" fr ka nam btao");
// frnds.push(frnam);
// while(frnam!=="exit")
// {
//      frnam=prompt("fr ka nam btao");
//      frnds.push(frnam);

// }
// frnds.pop();


// Objects=> value set by (:)
// collection of key values pair(s)
// var human={
//      name:"harsh",
//      age:23,
//      isGoodlooking:true,
//      frnds:["as","asd","asd"],
//      social:{
//           fb:["as","asd","asd","hsf"],
//           insta:["as","asd","asd"]
//      }
// }
// console.log(ar.frnds[1]);
// console.log(human);

// DOM= Document Object Model

// // selection
// var h1=document.querySelector("h1");
// // text chnge and html chnge
// h1.textContent="pause";
// h1.innerHTML="<i>play</i>";

// // css chnge
// var h1=document.querySelector("h1");
// h1.style.color="red";
// h1.style.fontFamily="gilroy";

// Selector
// var btn=document.querySelector("button");

//      btn.addEventListener("click",function(){
//           // document.querySelector("h1").style.color="red";
//           document.querySelector("h1").style.color="red";
//      })


// event bubbling
// kisi el pr event 





