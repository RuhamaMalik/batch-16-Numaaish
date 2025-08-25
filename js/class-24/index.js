// function readUsername (e){
//   e.preventDefault();
//   console.log(e);

// }



// <!-- ///////////// Reading field values  -->


// document.getElementById("contactForm").addEventListener("submit",
//   function(e){
//    e.preventDefault();

//    //////// get input field values

// var username = document.getElementById("username").value;
// var email = document.getElementById("email").value;

// console.log(">>>>>>>>>>> username " , username);
// console.log(">>>>>>>>>>> email " , email);



//   }
// )



// function contactForm(e) {
//   e.preventDefault();

//   //////// get input field values

//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;

//   if (username === "") {
//     alert("Username is required!")
//   } else if (email === "") {
//     alert("Email is required!")
//   } else {
// console.log(">>>>>>>>>>> username " , username);
// console.log(">>>>>>>>>>> email " , email);

//   }
// }

// document.getElementById("contactForm").addEventListener("submit", contactForm)




// <!-- ///////////// Setting field values  -->



function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  console.log(">>>>>>>>>> zipEntered ", zipEntered);

  switch (zipEntered) {
    case "11111":
      cityName = "Karachi";
      break;
    case "22222":
      cityName = "Peshawar";
      break;
    case "33333":
      cityName = "Quetta";
      break;
      default:
          cityName = "City not found";
  }
  document.getElementById("city").value = cityName;
}


// <!-- ///////////// Reading and setting paragraph text  -->



// function showList() {

//   var list = `
//  <ul>
//       <li>First Iem</li>
//       <li>Second Iem</li>
//       <li>Third Iem</li>
//       <li>Fourth Iem</li>
//       <li>Fifth Iem</li>
//     </ul>`


//   var containerList = document.getElementById("list");
//   containerList.innerHTML = list;


// }



////////////// 


// function readPara(){
//   var para = document.getElementById("secondPara");

//   console.log(para.innerText);
  
// }



// <!-- ////////////// Manipulating images and text -->


// function makeInvisible (){
//   var image = document.getElementById("ugly");
//   image.className = "ugly-img";
// }



function makeBig (){
  var image = document.getElementById("flower");
  image.className += " big";
}