// var str = "ajj Quiz cancel hogaya hai.... bchy bht hi zyada khush hen."

//// slice (copy)

// console.log(str.slice(4 , 22)); // Quiz cancel hogaya
// console.log(str.slice())
// console.log(str.slice(4))
// console.log(str.slice(-4)) // hen.
// console.log(str.slice(-4 , -3))

// var str = "ajj Quiz cancel hogaya hai.... bchy bht hi zyada khush hen.";

// console.log(str);
// str = str.slice(0,9) + "postpond" +str.slice(15)
// console.log(str);


///////////////////



// var str = "ajj Quizz cancel hogaya hai.... bchy bht hi zyada khush hen.";

// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 6) === "hogaya") {

//     // console.log("mil gya");
//     str = str.slice(0,i) + "postpond" +str.slice(i+6)
//     break;
//   }
// }
// console.log(str);



////////////////////////

// var txt = prompt("enter text");
// var replaceTxt = prompt("enter replace text");

// var str = "August 14th is Pakistan's Independence Day, a national holiday commemorating the nation's independence from British rule in 1947. It's a day of national pride, celebrated with flag hoisting ceremonies, parades, cultural events, and fireworks. The day also serves as a reminder of the sacrifices made by those who fought for Pakistan's independence. ";

// document.writeln(str)


// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + txt.length) === txt) {

//     // console.log("mil gya");
//     str = str.slice(0,i) + replaceTxt +str.slice(i+txt.length)
//     break;
//   }
// }
// document.writeln(`<h1> Replaced Text </h1>`);
// document.writeln(str);
// document.writeln(`<h1> FINAL </h1>`);
// document.writeln(`<p style="color:green"> ${txt} > ${replaceTxt} </p>`);




//////////////////// Asan 1

// var str = "ajj Quiz cancel hogaya hai.... bchy bht hi zyada khush hen.";
// var startIndex = str.indexOf("hogaya")

// // console.log(str.indexOf("abcd"));

// if(startIndex !== -1){
// str = str.slice(0,startIndex) + "kardiya" +str.slice(startIndex+6)
// }
// console.log(str);


//////////////////// Asan 2

var str = "ajj Quiz cancel hogaya hai.... bchy bht hi zyada khush hen. an quiz next class mai hoga . or Quiz lazmi hoga.";

// str = str.replace("cancel", "postpond")
// str = str.replace("Quiz", "test")
// str = str.replace(/Quiz/gi, "test")
// console.log(str);


//////////// charAt

console.log(str.charAt(4)); // Q
console.log(str.charAt()); // 0 -- a
// console.log(str.charAt(str.length-1)); // .
console.log(str.charAt(str.length-2)); // a
