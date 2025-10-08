// ---------------- promise ---------------
// ---- initial
//  ---- fulfill
//  --- reject

// let isPicnicOn = false
// console.log("Dicision making .... ");//1

// let picnic = () => {
//   return new Promise((complete, fail) => {
//     setTimeout(() => {
//       if (isPicnicOn) {
//         complete("Party ho rahi hai .")
//       } else {
//         fail("Ghar pe bheth jao")
//       }
//     }, 2000)
//   })
// }

// picnic()
//   .then((done) => {
//     console.log(done);//--- undefined -
//   })
//   .catch((cancel) => {
//     console.log(cancel);
//   })



// ---------------- promise with finally ---------------



// let matchFound = false;
// console.log("Shopping going on ...");

// const dress = new Promise((res, rej) => {
//   setTimeout(() => {
//     let found = matchFound ? res("Bought a dress") : rej("Hum Preshan")
//     return found
//   }, 1000)
// })

// dress
//   .then(function (done) {
//     console.log(done);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     setTimeout(() => {
//       console.log("Shop se niklo bhai.. Blood Pressure high .. ");
//     }, 1000)
//   })


// ---------------- promise with callback hell ---------------

// let matchFound = false;
// console.log("Shopping going on ...");

// const dress = new Promise((res, rej) => {
// setTimeout(() => {
//   let found = matchFound ? res("Bought a dress") : rej("Hum Preshan")
//   return found
// }, 1000)
// })

// dress
//   .then(function (done) {
//     console.log(done);
//     return "Shukar Alhamdulillah !!!"
//   })
//   .then((ret) => {
//     console.log(ret);
//   })
//   .catch((rej) => {
//     console.log(rej);
//     return "ab phir hospital jayin gay."
//   })
//   .then((ret) => {
//     console.log(ret);
//   })
//   .finally(() => {
//     setTimeout(() => {
//       console.log("Shop se niklo bhai.. Blood Pressure high .. ");
//     }, 1000)
//   })


// ---------------- promise with try / catch async / await ---------------

// let isFoodReady = true

// const Food = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let ready = isFoodReady ? res("han han jaldi le ao") : rej("peat me chohy dor rahy hain ..")
//       return ready
//     }, 1000)
//   })
// }


// async function checkFood() {
//   try {

//     // const result = await Food().then((done) => done)
//     const result = await Food()
//     console.log(result);

//   } catch (error) {
//     console.log("Catch Error ", error);

//   }
// }

// checkFood()




const fetchData = async () => {
  try {
    let res = await fetch('https://dummyjson.com/recipes')
    let result = await res.json();
    console.log(result);



  } catch (error) {

  }
}


fetchData()




/// Map
/// modules