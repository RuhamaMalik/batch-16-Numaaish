///////// SHallow copy (slice)

// var books = ["english", ["islamiat", "pst"], "physics", "urdu","math"];
// var copy = books.slice(); // first level copy

// books[2] = "PAK-Studies";
// copy[2] = "PAK-Studies";

// console.log("BOOKS: ",books); // change one
// console.log("COPY: ", copy); //  change one

// books[1][1] = "PAK-Studies"; /// all nested levels still connected to the original reference

// console.log("BOOKS: ",books); // both change
// console.log("COPY: ",copy); // both change


///////////////////////////////////////////

// var nestedArray = [
//     "level-1-1",
//     "level-1-2",
//     [
//        "level-2-1",
//         "level-2-2", 
//         "level-2-3",
//         [
//           "level-3-1" ,
//           "level-3-2"    
//         ],
//         "level-2-5"
//       ], 
//     "level-1-4"
//   ]

// var clone = nestedArray; // direct reference
// clone[2][3][0] = "changed"
// console.log(nestedArray[2][3][0]); // change
// console.log(clone[2][3][0]); // change


// var clone = nestedArray.slice(); // shaLLOW COPY --- only 1st level copy - diconnected to original array

// /// check first level

// clone[2] = "Nested";
// console.log(nestedArray); 
// console.log(clone); // change -- first level


/// check first level

// clone[2][1] = "Second";
// console.log(nestedArray); // change -- nested level -- connected with original value
// console.log(clone); // change



/////// slice(startIndex , endIndex(exclude))(optional);


// var colors = ["red", "yellow", "orange", "pink","green","blue", "black", "purple"];

// colors.length=0
// colors=[]



// console.log(colors.slice()); // ["red", "yellow", "orange","pink","green","blue", "black", "purple"];
// console.log(colors.slice(2)); // ['orange', 'pink', 'green', 'blue', 'black', 'purple']
// console.log(colors.slice(4)); // ['green', 'blue', 'black', 'purple']
// // console.log(colors.slice(2, 5)); //(2, 4) // ["orange","pink","green"]
// console.log(colors.slice(2, 6)); //(2, 5) // ["orange","pink","green","blue"]
// console.log(colors.slice(3, 4)); //(3, 3) // ["pink"]
// console.log(colors.slice(-1)); // ["purple"]
// console.log(colors.slice(-3)); // ["blue", "black", "purple"]
// console.log(colors.slice(-5, -2)); //   ["pink","green","blue"]


///////////// splice --- original array splice(startIndex(include) , deleteCount, AddElements )


var colors = ["red", "yellow", "orange",      "pink", "green" ,"blue", "black", "purple"];

// colors.splice(2); // ["red", "yellow"]
// colors.splice(5); // ["red", "yellow", "orange","pink","green"]
// colors.splice(3, 2) // ["red", "yellow", "orange", "blue", "black", "purple"]

console.log(colors);
colors.splice(0)
console.log(colors);

// colors.splice(4 , 1 , "white"); //  ['red', 'yellow', 'orange', 'pink', 'white', 'blue', 'black', 'purple']
// colors.splice(3, 2 , "lemon", "crimson"); // ['red', 'yellow', 'orange', 'lemon', 'crimson', 'blue', 'black', 'purple']
// colors.splice(3, 0, "lemon", "crimson") // ['red', 'yellow', 'orange', 'lemon', 'crimson', 'pink', 'green', 'blue', 'black', 'purple']

// console.log(colors);
