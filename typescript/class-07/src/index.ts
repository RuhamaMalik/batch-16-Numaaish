///////////// static

// class StaticClass {
//   static Pi:number = 12345;

//  static isString(input:any):boolean{
//    return typeof input === "string"
//   }
// }


// console.log(StaticClass.Pi);
// console.log(StaticClass.isString(47847875));
// console.log(StaticClass.isString("abcd"));

//////////////// Singleton

// class Util {
//   private static instance: Util

//   static Pi: number = 12345;

//   private constructor() { }

//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Util();
//     }

//     return this.instance;
//   }

// }


// // const util1 = new Util() // error
// const util1 = Util.getInstance();
// const util2 = Util.getInstance();
// console.log(util1 === util2);
// console.log(util1);



// console.log(Util.Pi);


////////////////////// Ex


// interface configType {
//   theme: string;
//   ln: string
// }

// class Config {
//   private static instance: Config;

//   private setting: configType = {
//     theme: "dark",
//     ln: "en"
//   }

//   private constructor() { }


//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Config();
//     }
//     return this.instance;
//   }


//   getSettings(key: string) {
//     return this.setting[key as keyof configType]
//   }

// }

// const appConfig = Config.getInstance();

// let theme = appConfig.getSettings("theme");
// let ln = appConfig.getSettings("ln");

// console.log(theme);
// console.log(ln);



//////////////////////////////////////   UNION ---- INTERSECTION


// type Data ={
//   type:"A",
//   name:string;
//   shift:string;
// }


// type Info = {
//    type:"B",
//   address :string;
//   contact:number
// }

// type Combine = Data | Info;

// const person:Combine = {
//   name:"Ruhama",
//   shift:"morning",

//   address:"ruhama colony"
// }


// const person:Combine = {
//   type:"B",
//   // name:"Ruhama",
//   // shift:"morning",

//   address:"ruhama colony",
//   contact:2832832
//   // abcd:"not allowed", // error
// }

// console.log(person);

//////////////////// &

// type Data ={
//   name:string;
//   shift:string;
// }


// type Info = {
//   address :string;
//   contact:number
// }


//  type Combine = Data & Info;

//  const user:Combine = {
//   name:"Arsheen",
//   shift:"Afternoon",
//   address:"arsheen colony",
//   contact:473874834
//  }

