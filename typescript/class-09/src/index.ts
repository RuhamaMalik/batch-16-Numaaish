
// function MyDecorator(template:string, eleId:string){ // decorator factory
//   return function(constructor:any){ // decorator
//     const product = new constructor();    
//     document.getElementById(eleId)!.innerHTML = template;
//     document.querySelector("h1")!.innerText = product?.title;

//   }
// }


// @MyDecorator(`<h1>Hello class</h1>`, "container")
// class Product {
//   public title:string = "Fair & lovely";
//   constructor(){}
// }


// @MyDecorator(`<h1>Hello class</h1>`, "container")
// class Animal {
//   public name:string = "Cat";
//   constructor(){}
// }


///////////////////////  Function overloading

// type Combine = string | number;

// function add(x: string, y: string):string
// function add(x: number, y: number):number
// function add(x: Combine, y: Combine) {
//   if (typeof x === "string" && typeof y === "string") {
//     return x + " " + y;
//   } else if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   } else {
//     throw new Error("Invalid input")
//   }
// }


// const result = add("Hello","Class");
// const result2 = add(5,46);


// console.log(result.split(" "));
// console.log(result2.toFixed(2));



// console.log((result as string).split(" ") );
// console.log((<number>result2 ).toFixed(2));

/////////////////////////////////////////////////

// const num1 = document.getElementById("n1")! as HTMLInputElement;
// const num2 = <HTMLInputElement>document.getElementById("n2")! 


// document.getElementById("btn")?.addEventListener("click",(e)=>{
//   e.preventDefault();
//  const n1 =Number( num1.value);
//  const n2 = Number(num2.value);

// document.getElementById("result")!.innerText =`Result : ${ n1 + n2}`
 
// })

// parent class === base class
// child class === derived class

////////// home work Enums