/////////// Syntax

// {
//   propertyName : propertyValue,
//   key:value
// }

// var user1 = { // object literal
//   name: "Yusra",
//   "age":10,
//   contact:834837483,
//   "user Skills" : ["cooking","football", "sleeping","coding"],
//   favColors:["red", "black","white"],
//   address:{
//     zipCode:945945,
//     street:"line 5",
//     city:"karachi",
//     area:"warsia"
//   },
//   isFemail:true
// }


// console.log(user1);

///////// dot notation

// console.log(user1.name); // Yusra
// console.log(user1.age); // 10
// console.log(user1.favColors); // ["red", "black","white"]
// console.log(user1.user Skills); //error
// console.log(user1.favColors[1]); // black
// console.log(user1.address.street); //line 5



///////// bracket notation

// console.log(user1["user Skills"]);  // [""]
// console.log(user1["name"]);  //  Yusra
// console.log(user1["favColors"][2]); // white
// console.log(user1["address"]["zipCode"]);




////////////// dot + bracket notation

// console.log(user1.address["city"]); // karachi
// console.log(user1["address"].city); // karachi





///////// dynamic property


// var dynamicProperty = "className";
// var dynamicValue = "1A";

// var student1 = {
//   name:"Ayesha",
//   rollNo:8989,
// [dynamicProperty]:dynamicValue,
// [dynamicProperty + "s"]:dynamicValue
// }

// console.log(student1.className); // 1 A
// console.log(student1.classNames); // 1 A

// console.log(student1["className"]); // 1 A
// console.log(student1["classNames"]); // 1 A

// student1.gender = "Female";

// console.log(student1);


// function addProperty(){
//   var propertyName = document.getElementById("propertyName");
//   var propertyValue = document.getElementById("propertyValue");
//   // console.log(propertyName.value);

//   student1[propertyName.value] = propertyValue.value;
//   console.log(student1);
// }



/////////////// add property


// var car1 = new Object();

// car1.colour = "Perple";
// car1.name = "BMW";
// car1.model = 2024;
// car1["price"] = "1.2 crore"
// car1.extra = "Fuzool hun mai -- Bewaja";

// console.log(car1);

// car1.model = 2025;

// console.log(car1);

// delete car1.extra ;

// console.log(car1);


// console.log("name" in car1); // true
// console.log("xyz" in car1); // false


////////////////// METHODS


// var user = {
//   fName:"Hooria",
//   lName:"Fatima",
//   age: 10,
//   qualification:"undergraduate",
//   gender:"Female",
//   greetUser: function(){
//     // console.log("Hello " + this.fName + " " + this.lName );
//     return "Hello " + this.fName + " " + this.lName;
//   }
// }

// // user.greetUser();
// var result = user.greetUser();
// console.log(result);



var phone = {
  brand: "Samsung",
  model: "A 52",
  price: 60000,
  battery: 80,
  storage: "128 GB",
  makeCall: function (number) {
    return `Calling ${number} ...`;
  },
  sendMessage:function(number, message){
        return `Sending Message: ${message} To, ${number}`
  },
  checkBattery:function(){
    return `Battery Remaining : ${this.battery} %`
  }
}

var call = phone.makeCall(987654321);
var message = phone.sendMessage(987654321, "Hello, kesi ho?");
var battery = phone.checkBattery();

console.log(call);
console.log(message);
console.log(battery);


