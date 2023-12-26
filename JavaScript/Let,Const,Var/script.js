// Let, Const, Var
//Difference b/w Let and Var:-
//Let= Variables declared by let are only available inside the block where they're defined.
//Var=  Variables declared by var are available throughout the function in which they're declared.
// Hoisting= Accessing before declaration. Allow with var not with let.
let a=12;
console.log("1st="+a)
a=13;               //No Error= We can change let value
console.log(a)

var c=12;
console.log(c)
c=13;               //No Error= Also We can change var value
console.log(c)

// const b=12;
// console.log(b)
// b=13;               //Error= We can't change constant value
// console.log(b)

//Function and Block Scope
// var x=10;
// var y=5;
// if(x>y){
//     let y=10;
//     var z=100;
//     console.log(x+y);
// }
// console.log(z);

