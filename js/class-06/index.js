// alert("2 plus 2 equals " + 2 + 2); // 2 plus 2 equals 22

/////// Prompt

// prompt(Question, defaultAns(optional))

// var username = prompt("What is your name ? ", "Guest");

// console.log("Your name is " + username);
// console.log(typeof username);// string


// var luckyNumber = prompt("What is your lucky number? e.g 4");
// console.log(luckyNumber + 5);// "6" + 5 = 65


// var luckyNumber = +prompt("What is your lucky number? e.g 4");
// console.log(luckyNumber + 5);// 6 + 5 =  11
// console.log(luckyNumber + 5);// abc + 5 =  NAN 


/////// comparision operators (true / false)

/*
   ==  equals to >>>> check by value
   != 
   === strict equal to >>> check by value + type
   !== 
   > 
   < 
   >= 
   <= 
*/

// console.log(5 == 5); // true
// console.log(5 == "5"); // true 

// console.log(5 != 5); // false
// console.log(5 != "5"); // false

// console.log(5 === 5); // true
// console.log(5 === "5"); // false 


// console.log(5 !== 5); // false
// console.log(5 !== "5"); //  true


// console.log(5 > 5); // false
// console.log(5 < 5); // false
// console.log(5 >= 5); // true
// console.log(5 >= 3); // true
// console.log(5 <= 3); // false
// console.log(5 <= 5); // true



// 10 ---------- if statements


// if(condition){
//   /// code to be execute
// }

//// truthy (true, 1) / falsy vaues

// if(true){
//    console.log("true is truthy value!");
// }

// if(1){
//    console.log("1 is truthy value!");
// }

// if(" "){
//    console.log("space in string is truthy value!");
// }

// if(-1){
//    console.log("-1 is truthy value!");
// }
// if(2){
//    console.log("2 is truthy value!");
// }
// if("false"){
// console.log("false i string is truthy value!");
// }



if(0){
 console.log("0 is falsy value!");
}

if(""){
   console.log(" empty string is falsy value!");
}
if(false){
   console.log(" empty string is falsy value!");
}
if(undefined){
console.log("undefined  is truthy value!");
}
if(null){
console.log("null  is truthy value!");
}

// console.log("abc "          + "xyz"); //abc xyz
