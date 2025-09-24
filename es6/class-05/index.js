// const user = {
//   name:"Ruhama",
//   email:"abc@gmail.com"
// }

// const isLoggedIn = user.name ? "User is Logged in" : "LogOut";

// console.log(isLoggedIn);

// let userNum = +prompt("Enter Number");

// const result =
//   isNaN(userNum) ? "Not a Number"
//     : userNum === 0 ? "Zero"
//      : userNum > 0 ? "Positive" 
//      : "Negative";


// console.log(userNum);
// console.log(result);


// const num = +prompt("Enter Number");

// const result = num%2 === 0 ? "Even" : "Odd";

// console.log(result);

////////////////// callback + HOF

// const getUser = (cb)=>{
//   const user = { // perform async task
//     name:"Hafiza Aqeela",
//     email:"hafiza@gmail.com",
//     age:10
//   }

//   cb(user.name);
// }

// const greet = (username)=>{
// console.log(`Hello ${username}`);

// }

// getUser(greet);

// console.log(greet("Ruhama"));

// function double (n){
// return n * 2;
// }

/////////////////


// const square = (n) => n * n;
// const double = n => n * 2;

// const calculate = (n, cb) => {
//   let result = cb(n);
//   return result;
// }

// let result1 = calculate(5, square);
// let result2 = calculate(5, double);
// console.log(result1);
// console.log(result2);


/////////////

// const square = (n) => n * n;
// const double = n => n * 2;

// const calculate = (n, cb, cb2) => {
//   let result = cb2(cb(n)) //25 ---  50
//   return result;
// }

// let result = calculate(5, square,double);
// console.log(result);


// function hof(a) {
//   return function (b) {
//     return function (c) {
//           return a + b + c;
//     }
//   }
// }
// // let result = hof(2)(3)(5);
// let result = hof(2)(3)(5);

// console.log(result);
