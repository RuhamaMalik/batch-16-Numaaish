////////// Function --- 35

// console.log(">>>>>>>> One");

// console.log("hello");

// myFunc();   ///  one , hello , stop/four/ two,three

// function myFunc (){   /// declare
//     console.log("Function declared");
// }

// console.log(">>>>>>>>>>> two");

// console.log(">>>>>>>>>>> three");

// myFunc();

// console.log(">>>>>>>>>>> four");

// myFunc();  // invoke / call
// myFunc();  
// myFunc();  
// myFunc();  
// myFunc();  

///////////// arguments / parameters


// function greet (parameters){
// }

// function greet (username){
//   console.log(username);
//   console.log(`Hello ${username}`);
// }

// // greet(arguments)
// greet("Ruhama");
// greet("Tuba");
// greet();


//////////////// Default Parameters

// function greet (username="Guest"){
//   console.log(`Hello ${username}`);
// }

// greet("Ruhama");
// greet("Tuba");
// greet();
// greet("Yusra");
// greet();
// greet("Ayesha");



// function myClass (a,b,c){
//  console.log(a); // Hooriya
//  console.log(b); // 5 
//  console.log(c); // true
// }

// myClass("Hooriya", 5, true)




// function myClass (a,b,c){
//   console.log(a);  // Hooriya
//   console.log(b);  // Shumaila
//   console.log(c);  // undefined
//  }

//  myClass("Hooriya", "Shumaila")


// function myClass (a,b="Guest",c){
//   console.log(a);  // Hooriya
//   console.log(b);  // Shumaila
//   console.log(c);  // undefined
//  }

//  myClass("Hooriya", "Shumaila")


// function myClass (a,b,c="Guest"){
//   console.log(a);  // Hooriya
//   console.log(b);  // Shumaila
//   console.log(c);  // Guest
//  }

//  myClass("Hooriya", "Shumaila")

// var palyer1 = prompt("Enter player1 name");
// var palyer2 = prompt("Enter player2 name");
// var palyer3 = prompt("Enter player3 name");


// function players (a="palyer1",b="player2",c="player3"){
// console.log(a);
// console.log(b);
// console.log(c);
// }

// players(palyer1,palyer2,palyer3)


//////////////// 

// var currentBalance = 50000;

// function withDrawl(currentBalance, withDrwalAmount) {
//   // var  withDrwalAmount = +prompt("Enter Amount");

//   if (withDrwalAmount <= currentBalance) {
//     currentBalance -= withDrwalAmount
//     console.log("Transaction successfull --- Remaining Amount : " + currentBalance);
//   } else {
//     console.log("Insufficient Balance!");
//   }


// }

// withDrawl(currentBalance, 5000)
// withDrawl(currentBalance, 10000)
// withDrawl(currentBalance, 6000)




/////////////// Return

// function sum (a,b){
// return a + b + 5
// }

// var result = sum(5,3)
// console.log(result); //  13

// console.log(5 + sum(5,3) - 3);
// otherFunc(sum(5,3))


// function square (a){
//   return a * a
//   }
  
//   var result = square(5)
//   console.log(result); //  25
  


/////////// variable shadowing

// var a = 5; // outer/ global scope

// function myFunc(){
//   var a = 4; // local scope

//   console.log(a);
// }

// console.log(a); // 5
// myFunc(); // 4



/////////////

function test (a, b){
  return a + b - 2
}

// console.log(a);  //// error
var result = test(5, 2);
console.log(result) 

// 5      5