// var weather = prompt("pleast select");


// if (weather === "winter") {
//   document.writeln(
//     `
//      <div class="card" style="width: 18rem;">
//   <img src="https://cdn.pixabay.com/animation/2025/01/05/02/03/02-03-02-262_512.gif" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Winter Season</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     `
//   )
// }else if(weather === "autumn"){
// document.writeln(`
//     <div class="card" style="width: 18rem;">
//   <img src="https://media.tenor.com/mKxsjcv8o1cAAAAM/autumn-leaves.gif" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Autumn Season</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//   `)
// }else{

// }

////// Nested Array

// var nestedArray = ["Anday", "Doodh", "Jam", ["apple",["red apple", "yellow apple" ,"green apple"],"mango"]];

// console.log(nestedArray[1]); //Doodh
// console.log(nestedArray[3][1]); // mango

// console.log(nestedArray[3][1][1]); // yellow apple
// console.log(nestedArray[3][2]); // mango





/////////// Array Methods



// var fruits = ["apple", "banana", "mango", "kiwi", "Peach"];

// console.log(fruits); 

//////////////// slice 

// var x = 5;
// var y = x;



// console.log("X: ",x);
// console.log("Y: ",y);

// x= 6;

// console.log("X: ",x); //6
// console.log("Y: ",y); //5

//////////////////// copy  (reference)


// var books = ["english", "urdu","math"];
// var books2 = books;

// console.log("BOOKS1 : " , books); // same
// console.log("BOOKS2 : " , books2); // same

// books[1] = "islamiat";
// books[1] = "islamiat";

// console.log("BOOKS1 : " , books); // change
// console.log("BOOKS2 : " , books2); // change

// books2[1] = "islamiat";

// console.log("BOOKS1 : " , books); // change
// console.log("BOOKS2 : " , books2); // change


///////// SHallow copy (slice)

// var books = ["english", "urdu","math"];
// var books2 = books.slice() // copy first level

// // books[1] = "islamiat";
// books2[1] = "islamiat";
// books2[2] = "accounts"

// console.log("BOOKS1 : " , books); 
// console.log("BOOKS2 : " , books2); 

/////////////////////// 

var books = ["english", ["phy-1", "phy-2"], "urdu","math"];
var books2 = books.slice() // copy first level

// books2[2] = "accounts"

books2[1][1] = "chem-1";

console.log("BOOKS1 : " , books); 
console.log("BOOKS2 : " , books2); 






////////////////  shift (remove start) ---- unshift (add start)

// fruits.unshift("Grapes")
// fruits.unshift("Grapes", "orange", "watermelon");

// fruits.shift();
// fruits.shift();


// console.log(fruits); 

//////////////// / push ---- pop

// fruits.length  ----- .property 
// fruits.push()  ----- .method() 



// fruits.push("Grapes");
// fruits.push("Grapes", "orange", "watermelon");
// console.log(fruits);

// fruits.pop();
// var removedEle = fruits.pop();
// var removedEle2 = fruits.pop();

// console.log(fruits); // length 3
// console.log(removedEle); // Peach
// console.log(removedEle2); // kiwi
