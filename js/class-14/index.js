//////////////////// print Arr


//  var users = ["Shumaila", "Hafsa", "Ayesha", "Noreen", "Riffat"]; // i=4; l=5
//               i  < 5
//  for(var i=0; i<users.length; i++ ){
//               i  <= 4
//  for(var i=0; i<=users.length-1; i++ ){
//     //  document.writeln("<h1>"+ users[i] +"</h1>")
//      document.writeln(`<h1>${users[i]}</h1>`)
//  }


//////////////////// print nested Arr

// var nestedArr = [["a", "b", "c"], ["x", "y", "z"], ["e", "f", "g", "h"]];

// for (var i = 0; i < nestedArr.length; i++) { // outer

//   // console.log("value of i >>> ", nestedArr[i] ); // ["a", "b", "c"]
//   document.writeln(`<h1>Outer Lopp --- ${nestedArr[i]}</h1>`)

//   for (var j = 0; j < nestedArr[i].length ; j++) {  // inner

//     // console.log("value of j >>> ", nestedArr[i][j]);// nestedArr[0][1] --  b     // 0 , 1 , 2, 3
//   document.writeln(`<p>Inner Lopp --- ${nestedArr[i][j]}</p>`)

//   }

// }


//////////////////// print Counting



// //     21
// for(var i = 1; i <= 100; i += 10 ){
// // document.writeln(i + "<br>")

// //      21     11 < 31
// for(var j = i; j < i+ 10; j++){
// document.writeln(j + " ")  // 1 2 3 .... 9 10
// //                            11 12 13 ..... 19 20
// //                            21
// }


//  document.writeln( "<br>")

// }







// var start = +prompt("Start Number");
// var END = +prompt("eND Number");

// for (var i = start; i <= END; i += 10) {

//   for (var j = i; j < i + 10; j++) {
//     document.writeln(j + " ")
//   }

//   document.writeln("<br>")

// }




// for(var i =1; i<=10; i++){
// document.writeln(`<h1>  2 X ${i} = ${2 * i}  </h1>`)
// }



var start = +prompt("Start Number");
var END = +prompt("eND Number");
var number = +prompt("Enter Number");

for(var i =start; i<=END; i++){
document.writeln(`<h1>  ${number} X ${i} = ${number * i}  </h1>`)
}









// console.log(nestedArr[i]); // [],[],[]


//  console.log(nestedArr[i]);
