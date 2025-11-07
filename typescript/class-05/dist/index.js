// class User {
//   // id: number|string;
//   id: number;
//   name: string;
//   age: number;
//   email: string;
//   constructor(id: number, n: string, age: number, email: string) {
//     this.id = id;
//     this.name = n;
//     this.age =age;
//     this.email =email
//   }
// }
// const user1 = new User(1,"Hooria",10,"hooria@gmail.com");
// const user2 = new User(2,"Mehwish",11,"mehwish@gmail.com");
// console.log(user1);
// console.log(user2);
/////////////////////// Access Modifiers
// public
// private  --- class k andar
// protected ---  class k andar | child/derived class
// class Product {
//  public title: string;
//  public description: string;
//  private price: number;
//  private brand: string;
//  public isAvailable: boolean;
//  public stock: number;
//   constructor(title: string, desc: string, price: number, brand: string,
//     isAvailable: boolean,
//     stock: number) {
//     this.title = title;
//     this.description = desc;
//     this.price = price;
//     this.brand = brand;
//     this.isAvailable = isAvailable;
//     this.stock = stock
//   }
// }
//////////////// Short method
// class Product {
//   constructor(public title: string, public description: string, private price: number, private brand: string, public isAvailable: boolean, public stock: number) { }
// }
// const product1 = new Product("Watch", "My Awesome watch...", 5000, "Rolex", true, 5);
// const product2 = new Product("Watch 2", "My Awesome watch 2 ...", 2000, "Rolex 2", true, 10);
// // console.log(product1);
// // console.log(product2);
// console.log(product1.title); // Watch -------- public
// console.log(product1.price); // Watch
/////////////////// 
// class Employe {
//   private skills: string[] = []
//   constructor(
//     private id:number,
//     public name: string,
//     public department: string,
//     private salary: number
//   ){}
// }
// const empolye1 = new Employe(123, "Insaan", "Finance", 100000);
// empolye1.skills.push("communication","accounting","client management");
// // empolye1.skills.length = 0;
// // empolye1.skills =[];  ///// masla
// console.log(empolye1);
//////////////////////////////////  set Methods
// class Employe {
//   private skills: string[] = []
//   constructor(
//     private id: number,
//     public name: string,
//     public department: string,
//     private salary: number
//   ) { }
//   addSkill(skill:string) {
//      this.skills.push(skill)
//   }
// }
// const empolye1 = new Employe(123, "Insaan", "Finance", 100000);
// empolye1.addSkill("communication");
// // empolye1.skills.length = 0;
// // empolye1.skills =[];
// console.log(empolye1);
// const obj = {
//   name:"Ruhama",
//   greet(){
//   },
//   age:10
// }
//////////////////////////////////  get Methods
// class Product {
//   constructor(
//     private id: number,
//     private name: string,
//     private price: number,
//     public stock: number
//   ) { }
//   public getId(): number {
//     return this.id;
//   }
//   public getName ():string{
//      return this.name;
//   }
//   public getPrice ():number{
//       return this.price;
//   }
// }
// const product1 = new Product(1, "Stylo", 4000, 100);
// // console.log(product1.name); // error
// console.log(product1.getId()); // 1
// console.log(product1.stock); // 100
// console.log(product1.getName()); // Stylo
// console.log(product1.getPrice()); // 4000
//////////////////////////////////  getter setter
class Product {
    constructor(_id, _name, _price, stock) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this.stock = stock;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
}
const product1 = new Product(1, "Stylo", 4000, 100);
console.log(product1);
console.log(product1.name);
console.log(product1.price);
export {};
//# sourceMappingURL=index.js.map