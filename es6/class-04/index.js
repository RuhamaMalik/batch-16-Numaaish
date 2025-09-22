// function MyConstructor (a,b){
// this.name = a,
// this.age = b
// }

// let test = new MyConstructor("Ruhama", "10");
// console.log(test);


// const MyConstructor = (a,b)=>{
// this.name = a,
// this.age = b
// }

// let test = new MyConstructor("Ruhama", "10");
// console.log(test);


// const user = {
//   name :"Shumaila",
//   age:10,
//   // greet:function(){
//   //   console.log(`Hello ${this.name} `);

//   // }
//   greet:()=>{
//     console.log(`Hello ${this.name} `);

//   }
// }


// user.greet();



/////////// Mutations


// const user = {
//   name :"Shumaila",
//   age:10,

// }

// user.age = 11

// console.log(user); // mutable

// Object.freeze(user);

// user.age = 10;

// console.log(user);


// function myFunction() {
//   let count = 0;
//   count += 1;

//   return count;

// }


// let count1 = myFunction();
// let count2 = myFunction();

// console.log(count1); // 1
// console.log(count1); // 1

// console.log(count2); // 1


// function createCounter() {
//   let count = 0;

//   function update() {
//     count++;
//     console.log(count);

//   }

//   return update;

// }


// let count1 = createCounter()
// let count2 = createCounter()


// count1() // 1
// count1() // 2

// count2() // 
// count2() // 



/////////////// Ternary operators

// coditon ? truthy vaue : falsy value


// if(true){
//   console.log("truthy vaue");
  
// }else{
//   console.log("falsy value");
  
// }

// const value = true ?   "truthy vaue" : "falsy value";

// const value = false ?   "truthy vaue" : "falsy value";
// console.log(value);





// let username = "Ruhama";
// let username = "";
// let message = username ? `Hello ${username}` : `Hello guest`;

// console.log(message);


/// callback - HOF

//// iterator - generator