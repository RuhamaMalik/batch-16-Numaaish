/*
modules
local/session storage


1 file === 1 module


2 types export

- name export --- multiple  --- import with same name
- default export --- 1 --- 

*/



// import { a, c, add, multiply } from "./module1.js";

console.log(">>>>>>>>>>>>> index.js");


// console.log(a); // 5
// console.log(c); // 20


// let sum = add(3, 7);
// console.log(sum); //10

/////////////////////   default export


// import double from "./module1.js";
// import abcd from "./module1.js";


// console.log(add(5,13)); // 18

// console.log(double(5,6));

// console.log(abcd.add(2,5));

////////////////// default + name export



// import subtract,{a,b} from "./module1.js";
// // import {a,b} from "./module1.js";

// console.log(a);
// console.log(b);

// console.log(subtract(7,2));




/////////////////// home work

// import result,{a ,b} from "./module1.js";


// const a = 10;

// console.log(a);
// console.log(b);

// console.log(result(7,2));



///////////////////////////////////


// local storage
// session storage




