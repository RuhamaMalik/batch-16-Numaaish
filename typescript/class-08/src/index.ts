
// /////////////// Interface 

interface A {
  name: string;
  greet(): void
}

interface B {
  address: string;
  contact: number
}



// const combine:A|B ={
//   address:"abcs street",
//   contact:384738743
// }

// console.log(combine);

interface C extends A, B {
  id: number
}

// const combine:C = {
//   address:"abc street",
//   contact:55498594,
//   name:"Ruhama",
//   greet(){
//     console.log(`Hello ${this.name}`);

//   },
//   id:7
// }


// console.log(combine);


///////////////// interface with class


// class Person implements C {
//   constructor(
//     public name: string,
//     public address: string,
//     public contact: number,
//     public id: number,
//     public skills:string[]
//   ) {}

//   greet(): void {
//     console.log(`Hello mera naam ${this.name} h`);
//   }

// }

// const person1 = new Person("Hooria", "Hooria colony", 283728732, 1,["cooking","drawing","teaching"]);

// console.log(person1.greet());


////////////// type guards

// function printLength(text:string|number) {
//  if(typeof text !== "number"){
//    return text.length;
//  }

//  return text;
// }

// console.log(printLength("Hello! kese ho????"));
// console.log(printLength(10));


////////////// type  casting (<> , as)


// let message:any ="Hello";
// let length:number =  (<string>message).length;

// console.log(length);


// let message:unknown ="Hello";
// // console.log((<string>message).length);

// console.log((message as string).length);


//////////////////// Generics

// function merge (obj1:object , obj2:object){
// return {...obj1, ...obj2}
// }

// const result = merge({name:"Dua"}, {id:1})
// console.log(result.name); // error


//////////////////


// function merge<T extends object, U extends object>(obj1:T , obj2:U){
// return {...obj1, ...obj2}
// }

// const result = merge({name:"Dua"}, {id:1})
// console.log(result.name); 


////////////// Decorators 

function MyDecorator(message:string){ // decorator factory
  return function  (constructor:any){ // decorator
   console.log(message);
}
}

function UpdateUi(){
  return function (constructor:any){
    const container = document.getElementById("box");
    container!.innerHTML = `<h1>Hello suno kese ho</h1>`
  }
}
// ! = non-nul assertion operator

@MyDecorator("Decorator function call")
@UpdateUi()
class Person{
  public name:string = "Ruhama";
  constructor(){}
}
