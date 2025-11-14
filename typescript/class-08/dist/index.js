// /////////////// Interface 
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
function MyDecorator(message) {
    return function (constructor) {
        console.log(message);
    };
}
function UpdateUi() {
    return function (constructor) {
        const container = document.getElementById("box");
        container.innerHTML = `<h1>Hello suno kese ho</h1>`;
    };
}
// ! = non-nul assertion operator
let Person = (() => {
    let _classDecorators = [MyDecorator("Decorator function call"), UpdateUi()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = _classThis = class {
        constructor() {
            this.name = "Ruhama";
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
export {};
//# sourceMappingURL=index.js.map