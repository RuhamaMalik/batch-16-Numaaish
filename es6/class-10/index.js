/////////// optional chaining

// let user = {
//   name:"Erum",
//   age:10,
//   gender:"Female",
//   skills:[{js:"javascript"},"teaching","cooking","over thinking","coding"],
//   location:{
//     location1:"Saylani",
//     location2:"Governer House",
//     location3: "Sweet Home"
//   }
// }

// console.log(user.locations.location2);

// console.log(user && user.locations && user.locations.location2 );
// console.log(user?.locations?.location2);


// console.log(user.skills[0].js); // javaScript
// console.log(user?.skills[6]?.js);


/////////////////////////////////   syncrounous / asyncronous

////// setTimeOut / setTimeInterval


// console.log("Code ----- 1");
// console.log("Code ----- 2");
// console.log("Code ----- 3");


// 1000ms = 1s


// console.log("Code ----- 1");

// setTimeout(() => {
//   console.log("Code ----- 2");
// }, 3000);

// console.log("Code ----- 3");   /// 123  321 132


///////////////// setTimeInterval


// const intervalId = setInterval(()=> console.log("My Interval"), 1000);


// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);




// let count = 0;

// let intervalId = setInterval(()=>{
// count++;
// console.log(`count ------ ${count}`);

// if(count >= 5){
//  clearInterval(intervalId);
// }

// }, 1000);


// --------------------- Promise ------------

// -- initial -- pending
// -- complte -- fulfil
// -- fail -- reject

// ----------------  promise syntax------------
// function pizzaPromise(){
//   return new Promise(function (resolve,reject){

//   })
// }

// let isAvailable = false

// function pizzaPromise() {
//   return new Promise(function (resolve, reject) {
//     if (isAvailable) {
//       resolve("Pizza mil gaya bhai.")
//     } else {
//       reject("Daal Chawal khanein gay.")
//     }
//   })
// }
// console.log("Pizza Party going on ....");

// pizzaPromise()
//   .then((res) => {
//     console.log(res);

//   })
//   .catch((rej) => {
//     console.log(rej);

//   })


// ----------------  promise with setTimeout ------------


// real time production -- examples