// ------------- Generator -----------

// function myFunc() {
//   console.log("Statement-01");
//   console.log("Statement-02");
//   console.log("Statement-03");

// }

// myFunc()


// --------------syntax-
// function *myGen() {
//   // Block of code

// }

// myGen()


// function* myGen() {
//   console.log("Open Event Gate");

//   yield "Hello Hooria"
//   // /--------------
//   yield "Welcome , How can i help you"
//   console.log("Function end Statement");
//   // ----------
//   yield "Shutter Down"


// }

// const generator = myGen()

// console.log(generator.next());// ---- Open Event Gate --------- Hello Hooria
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// ---------------- Generator with loop -----------------


// function *geneLoop() {
//   yield "Mango"
//   yield "Apple"
//   yield "Banana"
//   yield "Watermelon"
//   yield "Kiwi"
//   yield "Strawberry"
//   yield "Anaar"
//   yield "Angoor"
// }

// // console.log(generator.next());// --- { value :'mango', done:false }
// const generator = geneLoop()

// let result = generator.next()// mango 
// while (!result.done) { //result.done != true
//   console.log(result)

//   result = generator.next()//reassign --- Apple

// }




// ---------------- Generator with nested yield -----------------


// function* nestedGen() {
//   yield "Biryani"
//   yield "Shaljam"
//   yield* ["Kaddo", "tindy", "Bhindi", "Kareela"]
//   yield "Bangan"
//   yield "Gajar"
// }

// const generator = nestedGen()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next()); ///---  ["Kaddo", "tindy", "Bhindi", "Kareela"] -- Kaddo 
// console.log(generator.next()); ///----- tindy 


// ---------------- Generator test ----------------- 


// function* testGen() {
//   let result = yield
//   return result
// }

// const generator = testGen()
// generator.next() //--------- 3
// console.log(generator.next(3));//--------- 3



// ------------ return -- undefind --------------

// function concept(a, b) {
//   // console.log(a + b);
//   return a + b

// }
// console.log(concept(2, 3));//-------------- 1.) 5 ----- 2.) undefined 
// concept(2, 3)//-------------- 5 


let ar = [1,2,3,4,5];


const iterator = ar[Symbol.iterator]();

console.log(iterator.next());
iterator.next();
console.log(iterator.next());
