// // find max number
// var numbers = [5, 89,45,103, 78, 23,99];

// var max = numbers[0]; // 103

// //            6   
// for (var i = 1; i < numbers.length; i++) {
//   if(numbers[i] > max){  // 99 > 103
//        max = numbers[i]
//   }

// }


// console.log(max);



////////////////////////// ASCENDING ORDER

// var numbers = [8,5,9,2,1,7,3]; // [1,2,3,5,7,8,9]

// [5,8,2,1,7,3,9]

// for(var i = 0; i < numbers.length; i++){
//   //            4
//     for(var j = 0; j < numbers.length; j++){
//          if(numbers[j] > numbers[j+1]){
//            //         9 > 7 
//              var  currentIndex =  numbers[j]  // 8
//              numbers[j] = numbers[j+1]
//              numbers[j+1] = currentIndex;
//          }
//     }
// }


// console.log(numbers);







// var firstNames = ["Ruhama", "Abiha", "Tuba", "Ayesha"];
// var lastNames = ["Gull", "Fatima", "Jan", "Fatima"];
// var skills = ["html", "css", "js"];

// for (var i = 0; i < firstNames.length; i++) {

//   // console.log(firstNames[i] + " " + lastNames[i]);
//   document.writeln(`<h1>${firstNames[i]}  ${lastNames[i]}</h1>`)
//   for (var j = 0; j < skills.length; j++) {
//     document.writeln(`<li>${skills[j]}</li>`)
//   }
// }


var nestedArr = ["apple", "b", "c", ["d", "e", ["f", "g"], "h"], "i"];

// console.log(typeof []);


for (var i = 0; i < nestedArr.length; i++) {
  // console.log(nestedArr[i]);

  if (typeof nestedArr[i] !== "string" && typeof nestedArr[i] === "object") {

    for (var j = 0; j < nestedArr[i].length; j++) { // second level

      if (typeof nestedArr[i] !== "string" && typeof nestedArr[i] === "object") {
         for(var k=0; k<nestedArr[i][j].length; k++ ){
         console.log(nestedArr[i][j][k]);
         }
      } else {
        console.log(nestedArr[i][j]);
      }

    }
  } else {
    console.log(nestedArr[i]);
  }

}