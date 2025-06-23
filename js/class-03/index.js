////// Naming convention

// var camelCase;
// var myClass;

// var snack_case
// var my_class;

// var MyClass;
// var PascalCase;

// Ch # 5
// Math expressions:
// Familiar operators (+ - * / %)

// var num1 = 10;
// var num2 = 20;

// console.log(num1+num2);//30
// console.log(num1+ "20");//1020 string
// console.log(num1-num2);// -10
// console.log(num1-"20");// -10
// console.log(num1*num2);// 200
// console.log(num1*"20");// 200
// console.log(2/3);// 0.66666
// console.log(3/2);// 1.5
// console.log(3 % 2);// 1
// console.log(3 ** 5);// 27 power/exponent



///////////// CH # 6
//  Math expressions:
// Unfamiliar operators (++ , --)

// num++ // post increament
// num-- // post decreament

// ++num // pre-increament
// --num // pre-decreament


// var num = 1;

//  num =  num + 1 // 1+1 = 2

// num++; // 2

// ++num; // 2
// ++num; // 2
// ++num; // 2
// ++num; // 2
// ++num; // 2
// ++num; // 2

// console.log(num); // 7


// var num = 5; // 8 
// var testExp = ++num + num++ + num++;
// //              6   +   6   +  7 
// console.log(num); // 5   8
// console.log(testExp); // 8   7   18  19 

/////// PRACTICE

// var num = 3; // 7
// var testExp = num++ - ++num + ++num - ++num;
// //              3   -   5   +   6   -  7

// console.log(num); // 7
// console.log(testExp); // 1 -3


var num = 7; // 8 7
var testExp = num++ * num-- + ++num + 9 + --num;
//             7    *  8    +   8    + 9 + 7
console.log(num); // 7 8
console.log(testExp); // 80


