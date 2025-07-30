// Rounding number

// console.log(Math.round(3.5)); // 4
// console.log(Math.round(3.4)); // 3
// console.log(Math.round(3.7)); // 4
// console.log(Math.round("6.5")); // 7
// console.log(typeof Math.round("6.5")); // number
// console.log(Math.round(-3.5)); // 3.5 --- 4 , -3.5  -3 


// -5 -10 ------ -5

// console.log(Math.ceil(6.5)); // 7
// console.log(Math.ceil(6.1)); // 7
// console.log(Math.ceil(6.9)); // 7
// console.log(Math.ceil(6.0)); // 6
// console.log(Math.ceil(-6.1)); // -6

// console.log(Math.floor(6.5)); // 6
// console.log(Math.floor(6.1)); // 6
// console.log(Math.floor(6.9)); // 6
// console.log(Math.floor(6.0)); // 6
// console.log(Math.floor(-6.1)); // -7
// console.log(Math.floor(-6.9)); // -7

// - ka 3no ka aik saaath

// console.log(Math.round(-3.5)); // -3 
// console.log(Math.ceil(-3.5)); // -3 
// console.log(Math.floor(-3.5)); //  -4


// console.log(Math.round(3.47983));
//  // 3 
// console.log(Math.round(3.6683));
//  //  4
// console.log(Math.round(3.36));
//  // 3 


///////////// Generating random numbers

// 0 - 1(exclude) {0 - 0.9}   ---- 16 decimal places

// console.log(Math.random());
// console.log(Math.random() * 6);
// console.log(Math.floor(Math.random() * 100) + 1);



///////////////// number GUESing GAME

// var userInput = +prompt("Guess the Number between 1 to 10");
// var correctAns = Math.floor(Math.random() * 10) + 1;

// if (userInput === correctAns) {
//   console.log("Congratulations, You win!");
// } else if (userInput === correctAns +1  || userInput === correctAns -1) {
//   console.log("Almost there, The correct number is ", correctAns , "!");
// } else {
//   console.log("bhago  yaha se ");

// }


//// Converting strings to integers and decimals

var str = "1.79";

console.log(str);
console.log(typeof str);


// console.log(parseInt(str)); // 1
// console.log(parseInt(1+ 1,10));


// parseInt(string ,radix) 10 --- radix ---- number system

// console.log(parseInt(1 + "1")); // 11

// console.log(parseInt(1+ "1",2)); //  binary 11 ---- decimal 3

// console.log(parseInt(1+ "1",8)); //  octal 11 ---- decimal 9

// console.log(typeof str);


//////////////



