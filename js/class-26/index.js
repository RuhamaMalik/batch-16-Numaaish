// {
//   key :"value";
//   key2 :"value";
// }


// var allPara = document.getElementsByTagName("p");

// console.log(allPara[2].innerHTML);


// /////////////////// DOM


// console.log(document.childNodes[1]);  // html
// console.log(document.childNodes[1].childNodes[0]); //head
// console.log(document.childNodes[1].childNodes[0].childNodes[5]); //title
// console.log(document.childNodes[1].childNodes[0].childNodes[5].childNodes[0]); //js class-26



// console.log(document.childNodes[1].childNodes[2].childNodes[5].childNodes[0]); //3 ---------- Lorem ipsum dolor sit amet.




// console.log(document.childNodes[1].childNodes[2].childNodes); // extra text node ---- junk artifacts



////////////  nodeType --- number

/*

element ---- 1
attribute ---- 2
text node ---- 3
comment --- 8

eat c 123
*/


// var body = document.getElementById("body");


// console.log(body.nodeType); // 1


  // var pCounter = 0;
  // for (var i = 0; i <body.childNodes.length; i++) {
  // if (body.childNodes[i].nodeType === 1 ) {
  // pCounter++;
  // }
  // if (pCounter === 2) {
  // body.childNodes[i].innerHTML = "All his men.";
  // break;
  // }
  // }

/////////////////// 


// console.log(document.children[0].children[1].children[3]);


var body = document.getElementById("body");

// console.log(body.children[0]);
console.log(body.firstChild); /// count text(junk artifacts)
console.log(body.lastChild);  

