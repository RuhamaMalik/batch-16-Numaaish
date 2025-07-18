// alert("js-class-13")

// loops ---- Repitation 

// var arr = ["element1", "element2", "element3"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

////////////// For loop (known number of iterations)

// for(initialization; condition; updation){
//   //// Block of code
// }


// console.log("Before");


// for(var i =1; i <= 10; i++){
//   console.log(i);  // 1,2,3 ,.... ,9,10

// }

// console.log("After");

/////////////  Cleanest city

var cleanestCities = [
  "Karachi",
  "Peshawar",
  "Islamabad",
  "Lahore",
  "Kashmir",
  "Sawat",
  "Quetta",
  "Mardan"
];
// console.log(cleanestCities.length-1);

var city = prompt("Enter city!");
var isFound = false;


/////////////// Flag                   7

for (var i = 0; i <= cleanestCities.length - 1; i++) {
  if (city === cleanestCities[i]) {
    isFound = true;
    alert("It's one of the cleanest cities.  " + cleanestCities[i] );
    break;
  }
}


// console.log(isFound); // false

if(isFound === false){
    alert("Not found!");
}









// /////////////// simple loop >> array                     7

// for (var i = 0; i <= cleanestCities.length - 1; i++) {
//   // console.log(cleanestCities[i]); 
//   if (city === cleanestCities[i]) {
//     alert("It's one of the cleanest cities.  " + cleanestCities[i] );
//   } 

//   // else {
//   //   alert("Not found!");

//   // }

// }









// if (city === cleanestCities[0]) {
// alert("It's one of the cleanest cities");
//  }