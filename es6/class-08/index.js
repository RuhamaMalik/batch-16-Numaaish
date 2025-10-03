////////// Array Methods 

//////////////// forEach

// let colours = ["Red", "Blue","Black","white","pink", "green"];

// colours.forEach((e,i)=> console.log(`My Favourite colour : ${e} --- ${i}`));

/////////////////// map

// let newArr = colours.map((e,i)=>  e + " --- " + i );

// console.log(newArr);


/////////////////// filter

// let fileredElements =  colours.filter(e => e.length === 4 )
// console.log(fileredElements);

// let numbers = [88, 55,44 ,38 ,23 ,11 ,64,16,27,72,90,404,0];

// let even = numbers.filter(n => n % 2 === 0 )
// let even = numbers.filter((n,i) => i === 4 )

// console.log(even);
// console.log(numbers);


/////////////////// find

// let firstEvenNumber = numbers.find(n => n % 2 === 0  );
// console.log(firstEvenNumber);


/////////////////// reduce

// let numbs = [1,2,3,4,5];

// let result = numbs.reduce((acc , num)=> acc + num, 5);

// console.log(result);


/////////////////// some --- true/false


let numbs = [1,2,3,4,5];

// let result = numbs.some((n)=> n > 3 );

// console.log(numbs.some((n)=> n > 3 )); // true
// console.log(numbs.some((n)=> n > 4 )); // true
// console.log(numbs.some((n)=> n > 5)); // false

/////////////////// every --- true/false

// console.log(numbs.every((n)=> n > 0)); // true
// console.log(numbs.every((n)=> n > 1)); false


/////////////////// reverse --- change original array

let colours = ["Red", "Blue","Black","white","pink", "green"];

// console.log(colours.includes("Blue")); // true

// colours.reverse();

// console.log(colours);

/////////////////// join --- 

// let result = colours.join("-");

// console.log(result);



// let myStr = "Mera naam Arsheen nahi hai";
// let strArr = myStr.split(" ").reverse().join(" ")

// console.log(myStr);
// console.log(strArr);


// madam  eye anina maham

// let arr = ["apple", "madam", "ear","eye","anina","google ","maham"];


// // console.log("apple".split("").reverse().join(""));

// let result = arr.filter((e)=> e === e.split("").reverse().join(""))

// console.log(result);

