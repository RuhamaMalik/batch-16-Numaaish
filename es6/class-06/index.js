// ----------- Symbol (unique)---------------

// let a = 10;
// let b = 10;

// console.log(a === b);//true

// let a = Symbol(10)
// let b = Symbol(10)

// // console.log(a == b);//false
// // console.log(typeof a);
// // console.log(a);// 10 -- Object-- Symbol



// const teacher = {
//   name: "Maam_Ruhama",
//   age: 10,
//   email: "abc@gmail.com",
//   passCode: "123456",
//   subject: "Web-App",
//   // [sec.description]: timing.description,
//   // sec: '11-01',
// }

// console.log(teacher);// 09 -11 ------------11-01
// console.log(a.description);// 10

// // const sec1 = Symbol(`Sec`)
// const sec1 = Symbol(`sec`)
// const sec2 = Symbol(`sec`)
// // const timing1 = Symbol(`09-11`)
// // const sec2 = Symbol(`Sec`)
// // const timing2 = Symbol(`09-11`)

// const teacher = {
//   name: "Maam_Ruhama",
//   age: 10,
//   email: "abc@gmail.com",
//   passCode: "123456",
//   subject: "Web-App",
//   [sec1]: "9 to 11",
//   [sec2]: "11 to 1"
//   // [Symbol(`Sec1`).description]: Symbol(`09-11`).description,
//   // [Symbol(`Sec2`).description]: Symbol(`11-01`).description,
// }

// console.log(teacher);// 09 -11 ------------11-01


// ------------- Iterator ---------------

// maam Ruhama 

let names = ['Ayesha', 'Shumaila', 'Arsheen', 'Taj', 'Fiza', 'Yushfa', 'Hafiza', 'Maheen', 'Asma']

// syntax
// arrayName[Symbol.iterator]()
// const iterator = names[Symbol.iterator]()

// .next()---{value:...,done:true/false}

// console.log(iterator.next())//Ayesha
// console.log(iterator.next())//Shumaila
// iterator.next()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())//Hafiza
// console.log(iterator.next())//{value: undefined, done: true}
// console.log(iterator.next())//

// let result = iterator.next() //Shumaila

// while (result.done === false) {
//   console.log(result);
//   result = iterator.next()//Asma
// }


// ------------ Custom Iterator -----------------

// arr[2]

const custom_Iterator = (arr) => {
  let ind = 0
  let apna_Iterator = {
    next: function () {
      if (ind < arr.length) {
        return { value: arr[ind++], done: false }
      } else {
        return { value: undefined, done: true }

      }
    }
  }
  return apna_Iterator
}

const iterator = custom_Iterator(names)

console.log(iterator.next());
console.log(iterator.next());
