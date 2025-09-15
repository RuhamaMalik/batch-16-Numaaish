// var myVar;
// myVar="Hello";
// console.log(myVar);
// myVar = "Hello world!"
// var myVar = "Doobara bana lia";


// let myVar;
// myVar="Hello";
// console.log(myVar);
// myVar="Reassign Hello";
// console.log(myVar);
// let myVar // Cannot redeclare block-scoped variable 'myVar'


// const myVar; // const' declarations must be initialized
// const myVar ="initialize constant variable";
// console.log(myVar);
// myVar="Reassign constant var";
// console.log(myVar); // error
// const myVar ="initialize constant variable"; // error

///////////// Scope

//////////////////////////// var

// var global = "global variable" ;

// function checkScope(){
//   // console.log(global); // access
//   var local = "local variable";

//   if(true){
//     //  console.log(global);  // access
//     //  console.log(local);  // access
//      var block = "block scope variable";
//   }
// // console.log(block);  // access

// }

// // console.log(block);  // ReferenceError
// // console.log( local); // ReferenceError
// checkScope();


///////////////////////// let/const


// let global = "global variable";

// function checkScope() {
//   // console.log(global); // access
//   // let local = "local/function scope variable";

//   if (true) {
//     //  console.log(global); // access
//     // console.log(local); // access
//     // let  block = "block scope variable";
//     // console.log(block);
//   }

//   // console.log(block); // ReferenceError
  
// }


//  console.log(global); // access
// console.log(local); // ReferenceError
// checkScope();



//////////// Hoisting 

// let myVar;
// console.log(myVar);

console.log(a);
// var a;
var a = 12;
console.log(a);


////// hoistong
/////   Recursion