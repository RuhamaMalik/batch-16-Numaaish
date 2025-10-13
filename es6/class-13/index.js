// const fruits = new Map([
//   ["apple", 500],
//   ["banana", 100],
//   ["mango", 400]
// ]);


// console.log(fruits.get("apple")); // 500

const fruits = new Map();


fruits.set("apple", 500)
fruits.set("banana", 100)
fruits.set("mango", 400)

// console.log(fruits.has("banana")); //true
// console.log(fruits.has("kiwi")); //false

// fruits.delete("apple");

// console.log(fruits.size);

// fruits.clear();

// console.log(fruits);



for (const [key, value] of fruits) {
  console.log(`${key} ------------ ${value}`);
}