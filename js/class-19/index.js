// var txt = "anshra wali muhammad kapadia";
// console.log(txt);
//  var result = txt.charAt(0).toUpperCase()+txt.slice(1);
// console.log(result);
// for(var i=1; i<txt.length; i++){
// result = txt.charAt(i).toUpperCase()+txt.slice(i);
// }
// console.log(result);



// var txt = "anshra wali muhammad kapadia";
// console.log(txt);

// var words = txt.split(" ")
// var capitalize = "";

// for (var i = 0; i < words.length; i++) {
//   var word = words[i];
//   capitalize += word.charAt(0).toUpperCase() + word.slice(1) + " "

// }
// console.log(capitalize);

// 28 - Converting strings to integers and decimals


// var str = "2.89";

// console.log(str);

// console.log(parseInt(str, radix));


// console.log(parseInt(str));
// console.log(parseInt("23 78")); // 23
// console.log(parseInt("78")); //  78
// console.log(parseInt("20 years")); //  20
// console.log(parseInt("abc 20 years")); // NaN
// console.log(parseInt("five")); // NaN


// console.log(parseInt("11" , 2)); /// decimal -- 3


/////////////////// parseFloat


// console.log(parseFloat("2.89")); // 2.89
// console.log(parseFloat("23 78")); // 23
// console.log(parseFloat("23.9 78")); // 
// console.log(parseFloat("abc 23.9 78")); // NaN


// Converting strings to numbers, numbers to
// strings


// console.log(Number()); // 0
// console.log(Number("3.67")); // 3.67
// console.log(Number("3.67 abcd")); // NaN

// number ---> string

// var num = 76;
// console.log(num + 4); // 80
// num = num.toString();
// console.log(num + 4); // 764

// boolean ---> string


// var isPass = true;
// console.log(isPass);
// isPass = isPass.toString();
// console.log(isPass.slice(1,3)); // ru


// console.log(undefined.toString()); // error
// console.log((undefined + "").slice(2)  );

// console.log(null.toString() ); // error
// console.log(null + "" ); // null


// parseInt
// parseFloat
// Number
// toString


// Controlling the length of decimals


var decimal = 34.4577865874;

// console.log(typeof decimal.toFixed(2)); // string
// console.log(Number(decimal.toFixed(2))); 
// console.log(Number(decimal.toFixed()));  // 34
// console.log(Number(decimal.toFixed(1)));  // 34.5
// console.log(Number(decimal.toFixed(0))); // 34



