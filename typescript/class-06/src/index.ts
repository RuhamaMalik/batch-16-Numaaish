// class Product {

//   constructor(
//     private _id: number,
//     private _title: string,
//     private description: string,
//     private price: number
//   ) { }

//   get id(): number {
//     return this._id;
//   }

//   get title(): string {
//     return this._title;
//   }


//   set id(pid: number) {
//     this._id = pid;
//   }

//   set title(name: string) {
//     if(name === ""){
//        throw new Error("name can not be empty")
//     }
//     this._title = name;
//   }

// }

// const product1 = new Product(1, "Shampoo", "lamby, ghany,chamakdaar, kaaly baal", 2000);

// console.log(product1.id);
// console.log(product1.title);
// product1.id = 500;
// product1.title = "a"

// console.log(product1);

////////////////// Inheritance

// class ElectronicProduct extends Product{

//   constructor(
//     id:number,
//     title:string,
//     description:string,
//     price:number,
//     private brand:string,
//     private voltage: string,
//     private warranty : "2 months" | "6 months" | "1 year"
//   ){
//     super(id,title,description,price)
//   }

// }

// const fridge = new ElectronicProduct(1,"Dawlance", "Q k Dawlance reliable hai",150000,"Dawlance", "1800v", "6 months");

// console.log(fridge.title);


// class CosmeticProduct extends Product{

//   constructor(
//     id:number,
//     title:string,
//     description:string,
//     price:number,
//     public expireDate:string,
//     public manufacture:string,
//     private barCode: number
//   ){
//     super(id,title,description,price);
//   }
// }

// const creame = new CosmeticProduct(2,"Faiza Beauty creame", "22-31-90 husn ka drwaza khol dy", 250, "lifetime", "made in Pakistan", 74433);

// console.log(creame);


///////////////////////////////  Abstraction / Polymorphism

/////// Method Overriding

// abstract class Animal {

//   constructor(
//     private _name: string
//   ) { }

//   get name() {
//     return this._name
//   }

//   set name(n: string) {
//     if (!n) {
//       throw new Error("please insert name")
//     }
//     this._name = n
//   }

//   abstract makeSound(): void


// }

// // const animal = new Animal() // error

// class Cat extends Animal {
//   makeSound(): void {
//     console.log("Meow meow");
//   }
// }


// class Hen extends Animal {
//   makeSound(): void {
//     console.log("kukduku , kukduku");
//   }
// }


// const cat1 = new Cat("Mano");
// cat1.makeSound();

// const hen = new Hen("Marjina");
// hen.makeSound()


/////// Method Overloading


// class Calculator {


//   add(a:number, b:number):number;
//   add(a:string, b:string):string;
//   add(a:any, b:any):any{
//     return a+b
//   }
// }


// const sum = new Calculator();

// console.log(sum.add(5,5));
// console.log(sum.add("abcd","------- xyz"));
// console.log(sum.add({}, 78));

