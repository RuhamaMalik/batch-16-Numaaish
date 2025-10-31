// let a;
// a=5;
// a="5";

// console.log(a);


// let fruits:string[] = ["apple","banana","mango"];

// console.log(fruits);


// let numbs : number[] = [54,78,45,33];
// console.log(numbs);


////////////////////////////////////// Custom Type

/////////// type aliases

// type User = {
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   isActive: boolean
// }

// let user: User = {
//   name: "Hooria",
//   email: "hooria@gmail.com",
//   age: 10,
//   gender: "female",
//   isActive: true
// }


// let user2: User = {
//   name: "Arsheen",
//   email: "arsheen@gmail.com",
//   age: 15,
//   gender: "female",
//   isActive: false
// }

// console.log(user);
// console.log(user2);


// type User = {
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   isActive: boolean
// }

// let users:User[] = [

// {
//   name: "Hooria",
//   email: "hooria@gmail.com",
//   age: 10,
//   gender: "female",
//   isActive: true
// },
// {
//   name: "Shumaila",
//   email: "shumaila@gmail.com",
//   age: 10,
//   gender: "female",
//   isActive: true
// },
// {
//   name: "Arooba",
//   email: "arooba@gmail.com",
//   age: 10,
//   gender: "female",
//   isActive: true
// }




// ]


// console.log(users);




///////////   interfaces

// type Fruit = string;
// let fruit: Fruit = "Apple";

// interface Employ {
// // type Employ ={
//   name: string;
//   id: number;
//   salary: number;
//   department: string;
//   skills: string[];
//   isActive: boolean;
//   profImg?:string // optional
// }

// let emploe1: Employ = {
//   name: "Ali",
//   id: 420,
//   salary: 500,
//   department: "HR",
//   skills: ["pak pak pakau", "pheku", "oversmart"],
//   isActive: false,
//   // profImg:"hwererkjerjkerh"
// }

// console.log(emploe1);



////////////////////////// Union

// type Size = string | number;

// interface Person {
//   name:string,
//   id:string | number;
// }
// let size:Size = "Xl";
// size=42
// // size=true  //error

// console.log(size);


////////////////////////// String Literal/ Literal types

// type Size = "XS" | "SM" | "MD" | "LG" | "XL" | 39 | 36 | 42 | 48;

// let size:Size = 42;
//  size = 36;
// //  size = 52; // error

// // size = "Sm" // error --- case-sensiive
// size = "SM"


//////////////////// Functions

// let myFunc: Function;

type MyFunc = (n:number, n2:number)=>number;

const sum:MyFunc = (x , y )=> x+y; // declare

console.log(sum(4,5));  // invoce


//// Tuples
/// OOPS