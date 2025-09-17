// console.log(a); // undefined
// var a = 10;
// console.log(a); //10


// console.log(a); // undefined
// let a = 10;
// console.log(a); //10

// myFunc();

// function myFunc (){
//   console.log("Hello class!");
//   }


//  abcd();
// var abcd = function(){
//   console.log("Hello class!");
//   }


//////////////////// Template literal (``)

// multi line string
// console.log(`
//   multi
//   line
//   string
//   `);

// html

// document.writeln(
//   `
//   <ul>
//       <li>Apple</li>
//       <li>Banana</li>
//   </ul>
//   `
// );

// "''"

// console.log("hum 'es6 ' padh rahy hen");
// console.log(`hum ""es6"" padh rahy hen`);


// let price = 60;
// let quantity = 5;


// function calculateTotal(){
//   return price * quantity;
// }


// console.log(`
//   price: ${price}
//   quantity: ${quantity}
//   Total Amount : ${calculateTotal()} `);

//////////////////  Recursion

// function newFunction(n){
//   if(n ===0){
//       return;
//   }

//   console.log("tom and jerry show " + n); // 5 ,4, 3, 2,1
//   newFunction(n-1); // 4
// }

// newFunction(5)

///////////////////////

// let numbers=[];

// function ascendingOrder(n) {
//   if (n === 11) {
//     return;
//   }
//   numbers.push(n)
//   ascendingOrder(n + 1);
// }

// ascendingOrder(1);


// console.log(numbers);


///////////////////////

// let arr = ["Ruhama", "Ayesha", "Hooria", "Arisha", "Fatima", "Maheen"];

// function printArr(i) {
//   if (i === arr.length) {
//     return;
//   }

//   console.log(arr[i] + " --- " + i);
//   printArr(i + 1);
// }

// printArr(0);



////////////////////////// Destructuring


let arr = ["Ruhama", "Ayesha", "Hooria", "Arisha", "Fatima", "Maheen"];

// let st1 = arr[0] /// triditional way
// let st2 = arr[1]
// let st3 = arr[2]

// const [st1,st2,st3,st4,st5,st6,st7=7] = arr;
// console.log(st4); //Arisha
// console.log(st7);

// const [st1,st2,st3,...st4] = arr;
// console.log(st2);
// console.log(st4);


const [,,, st4,,st6] = arr;
console.log(st4);
console.log(st6);


let student = {
  name:"Ruhama",
  age:10,
  rollNo:10000,
  contact:"03847385",
  skills:["cooking","sleeping","teaching","coding","eating","drinking"]
}

// const {name,age,rollNo,contact,skills,role="user"} = student;

// console.log(contact);
// console.log(skills);
// console.log(role);
// console.log(fname);

// const {name,rollNo,age,skills,contact,role="user"} = student;
// const {name,rollNo} = student;
// console.log(rollNo);


 const {name,age, ...restObj} = student;
console.log(age);
console.log(restObj);



/*
- unpack values
- default value
- rest values
- sequence in Aray + same property name in object
*/

/////////////// arrow function
/////////////// closures (lexical scope/lexical environment)