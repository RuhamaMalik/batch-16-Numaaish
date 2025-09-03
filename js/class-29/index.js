////////////// for of (Array)

// var arr =[23,77,89,34];

// // for(var i=0; i<arr.length; i++){
// // }

// for(var ele of arr){
// console.log(">>>>>>>>> ",ele);
// }



// var student1 = {
//   name:"Ayesha",
//   age:10,
//   marks:[90,34,23,10,80],
//   calculateMarks: function(){
//     var total = 0;
//     for(var marks of this.marks){
//         total += marks;
//     }
//     return total;
//   }
// }

// var result = student1.calculateMarks();


// console.log(student1.name );
// console.log("Result : ", result );


///////////// Constructors   (Function --- )

// function Person(pName, age, gender, contact, profession) {
//     this.name = pName,
//     this.age = age,
//     this.gender = gender,
//     this.contact = contact,
//     this.profession = profession,
//     this.example = "Test",
//     this.greet = function(){
//       return `Hello ${this.name }`
//     }
//   }

// var person1 = new Person("Ruhama", 10,"female",987654321, "teaching");
// // person1.example = "Test"
// console.log(person1);
// console.log(person1.greet());

// var person2 = new Person("Tuba", 11,"female",12345678, "developer");
// console.log(person2);
// console.log(person2.greet());

///////////// Prototypes   (Function --- )


// var user ={
// name:"Ruhama",
// age:10
// };


// console.log(user);


// var arr =[23,77,89,34];
// Array.prototype.myOwnProperty = "Hello class kese ho?"
// Array.prototype.mySlice = function (){
//   return "Slice"
// }
// console.log(arr);




// function Employee(name, id, address, department, salary, timings) {
//   this.name = name,
//     this.id = id,
//     this.address = address,
//     this.department = department,
//     this.salary = salary,
//     this.timings = timings
// }
// Employee.prototype.greet = function () {
//   return `Hello ${this.name}. Welcome to ${this.department} department.`
// }

// var employee1 = new Employee("Shamim", 6964, "karchi,Pakistan", "IT", 30000, "12 to 06");
// var employee2 = new Employee("Naseem", 1234, "Lahore,Pakistan", "HR", 130000, "2 to 06");


// for (var key in employee1) {
//   // console.log(key + " : " + employee1[key]);
//   if (employee1.hasOwnProperty(key)) {
//     console.log(key + " : " + employee1[key]);
//   }
// }


// console.log(employee1);
// console.log(employee1.greet());
// console.log(employee2);
// console.log(employee2.greet());

// console.log("address" in employee1); // true
// console.log("xyz" in employee1); // false
// console.log("greet" in employee1); // true


// console.log(employee1.hasOwnProperty("department")); // true
// console.log(employee1.hasOwnProperty("greet")); // false



//////// FOR IN LOOP  (Objects)


// var product = {
//   title: "pencil",
//   price: "20",
//   brand: "dollar",
//   colours: ["brown", "black", "pink", "blue", "purple"],
//   ratings: 4.9,
//   discount:"10%"
// }

// for(var varNameAny in objectName){}


// for(var prop in product){
// // console.log(prop); // property name
// console.log(product[prop]); // property value
// }



// 76 -  Getting and setting the URL





