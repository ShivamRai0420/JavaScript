// we have an array of no. and string combine all strings together with space and print.    [1,2,"harsh",4,7,"h"=>"harsh"]

var arr=[1,2,"harsh",4,7,"h","harsh",2,"raam",2,"kaala"];

// var final=""
// arr.forEach(function(elem){
//     if(typeof elem=="string"){
//         final=final+elem;
//     }
// });
// console.log(final);

// we have an array of string and numbers, only remove numbers.
// arr.forEach(function(elem,index){
//     if(typeof elem=="number"){
//         arr.splice(index,1);
//     }
// });
// console.log(arr);

// var newarr=arr.filter(function(elem){
//     typeof elem=="string" ? return true:false;
//     }
// })
// console.log(arr);

// you have an array of username only print those username which have more than two 'a' character.
// var arr=["harsh","haa","harsh",2,"raam",2,"kaala"];

// for(var i=0;i<arr.length;length++){
//     let counter=0;
//     var charactersArray=arr[i].split("");
//     for(var j=0;j<charactersArray.length;j++){
//     if(charactersArray[j]==="a"){
//         counter++;
//     }
//     if(counter>1){
//         console.log(arr[i]);
//         break;
//     };
// };
// };


// we have an array of numbers only remove those no. which get more than 10 sum of its alternate digit.

// var arr=[655544,12,567,345,8765];
// arr.forEach(function(elem){
//     var arrayofdigits=elem.toString().split("");
//     for(var i=0; i< arrayofdigits.length; i +=2){
//         sum=sum+i;
//     }
// })

// we have a string only print three char which are getting largest ascii sum.
// var str="maakda";
// var charcodes=[];
// str.split(" ").forEach(function(elem){
//     charcodes.push(elem.charCodeAt());
// })
// for(var i=0;i<charcodes.length;i++){
//     for(var j=0;j<charcodes.length-i;j++){
//         if(charcodes[j]>charcodes[j+1]){
//             var temp=charcodes[j];
//             charcodes[j]=charcodes[j+1];
//             charcodes[j+1]=temp;
//         }
//     }

// }
// console.log(fromcharcodes)