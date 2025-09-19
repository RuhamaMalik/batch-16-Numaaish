// let arr = [1,2,3,[4,5,6],7,8,9];
// const [a,b,c,[d,e,f],g,,i] = arr;

// console.log(d); //4
// console.log(i); //9
// console.log(arr);



// const employee = {
//   name:"Ayesha",
//   department : "IT",
//   salary:"100,000",
//   shift:"morning",
//   skills:{
//     reactjS:"proficient",
//     devOps:"intermediate",
//     backend:"proficient"
//   },
//   gender:"female"
// }

// const {name,salary, skills, skills:{reactjS,devOps,backend}  } = employee;

// console.log(name);
// console.log(reactjS);
// console.log(skills);


// function getUser (user){
// // console.log(user);
// console.log(user.name);
// console.log(user.gender);
// }

// function getUser ({name, gender}){
// console.log(name);

// }

// getUser (employee)


//////////////////// Rest or Spread Operators (...)


// function myFunc (a,b,c,d,e){

// function myFunc (...arg){ // rest
// // console.log(arg); // [1,2,3,4,5,6,7,8,9]
// // console.log(...arg);

// const [,a,,d] = arg;
// console.log(a); // 2
// console.log(d); // 4

// }


// myFunc(1,2,3,4,5,6,7,8,9)


// const oldStds = [["Tuba"],"Kavita","Bushra"];
// const newStds = ["shumaila","Hooria", "Arsheen"];
// // const allStds = oldStds + newStds;


// const allStds = [...oldStds,...newStds];

// oldStds[0][0] = "Jan";

// console.log(allStds);


// const recipe = {
//   title:"Coffee",
//   type:"Cold Coffee",
//   ingredients:{
//       ice:"6 cube",
//       sugar:"2 tbsp",
//       milk:"1 cup",
//       coffeePowder:"3 tbsp"
//   }
// }

// const specialCoffee = {
//   ...recipe,
//   chocolate:"2 tbsp",
//   iceCreame: "1 scoope"
// }


// console.log(specialCoffee);


////////////// Arrow Functions

// const add = function(a,b){
//   return a+b
// }


// ()=>{}

// const add = (a,b)=>{
//   return a+b
// }


// const add = (a,b) => a + b
// const result = add(1,4);
// console.log(result);


// const user = a => a ;

// const result = user("Ruhama");
// console.log(result);


// function myFunc (){
// console.log(arguments); // [1,2,3,4,5]
// console.log(arguments.length); // 5

// }


// myFunc(1,2,3,4,5);


const myFunc = (...arg)=> {
 console.log(arg);
 console.log(arg.length);
 
}

myFunc(1,2,3,4,5);