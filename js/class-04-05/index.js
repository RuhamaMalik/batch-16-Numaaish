// var a = 2; // 2
// var b =7; // 9
// var exp = ++a + ++b - 89 - 76 - ++b + --a;
// //         3  +   8  - 89 - 76 - 9  + 2


// console.log(a); //  2
// console.log(b); // 9 
// console.log(exp); // -161



// var a = 3; // 3 
// var b =9; // 10
// var c =6; // 7
// var exp =  ++a - ++c - 67 + ++b + --c + --a - c++;// 
// //           4 -  7  - 67 +  10  +  6 +  3  - 6

// console.log(a); // 3
// console.log(b); // 10 
// console.log(c); // 7
// console.log(exp); // -57 


// var a = 11; // 11
// var b =7; // 7
// var c =2; // 4
// var exp =  a++ + --b + ++c * 4 - a-- + c++ + ++b;
// //          11  +  6  + 3  * 4 - 12  +  3  +  7
// //                      12
// console.log(a); // 11  
// console.log(b); //  7  
// console.log(c); // 4
// console.log(exp); // 27


// 7
// Math expressions:
// Eliminating ambiguity

/*
B
O
DM // 3 / 3 * 5  // 3 * 3 / 5
AS // 3+5-7  // 3-5+7
*/

// console.log(3+6+8);// 17
// console.log(3+6+8-2+3);// 18
// console.log(3-2*5+3);// -4 ----- 8 10 11  // 3-10+3   -7+3  -4

// console.log(3-4*5+3);  // 3-20+3 = -14
// console.log((3-4)*5+3);  // -1*5+3 =  -2
// console.log((3-4)*(5+3));  // -1*8 = -8

// console.log(2+4+5/15*100); // 39%
// console.log(((2+4+5)/15)*100); // 73%



///////////// Assignment Operator

// var x = 5;
// x = x+3
// x++, ++x;

// x += 3
// x -= 3
// x *= 3
// x /= 3

// console.log(x); // 15


// 8---Concatenating text strings (+)

// console.log( 2 - "5a");// NAN
// console.log( 2 - "5 a");// NAN


// console.log( 2+ 5);// 7
// console.log( 2+ "5");// 25

// var fName = "Ruhama";
// var lName = "Gull";


// console.log(fName + lName); // RuhamaGull
// console.log(fName+ " " + lName); // Ruhama Gull

// var age = 10;

// console.log("my age is " + age + " hello ");


// document.writeln("<h1>Hello World</h1>")

console.log("23" + 7);//237 string
console.log("23" + 7 + 5);//2375
console.log(7 + 5 + "23" + 1);// 12231
console.log(1 +true + "abc"); //2abc   

