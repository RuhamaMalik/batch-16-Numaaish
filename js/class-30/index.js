// alert("class-30")


//  function checkForPopBlocker() {
//   var testPop = window.open("", "","width=100,height=100");
//   if (testPop === null || typeof(testPop === "undefined")) {
//   alert("Please disable your popup blocker.");
//   }
//   testPop.close();
//   }


////////////////////// Forms Validation


// function checkForLastName (){
//   if(document.getElementById("lastNameField").value.length === 0){
//     alert("Please enter your last name");
//     document.getElementById("lastNameField").focus();
//     return false
//   }
// }

// function checkForSelection(id) {
//   if (document.getElementById(id).selectedIndex === 0) {
//     alert("Please select a state. " + id);
//     return false;
//   }
// }


// function validateRadios(name) {
//   var radios = document.getElementsByName(name);
//   console.log(radios);

//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }
//   }
//   alert("Please check one. " + name);
//   return false;
// }


// function validateZIP() {
//   var valueEntered = document.getElementById("zip").value;
//   var numChars = valueEntered.length;
//   if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
//   }
//   for (var i = 0; i < valueEntered.length; i++) {
//     var thisChar = parseInt(valueEntered[i]);
//     if (isNaN(thisChar)) {
//       alert("Please enter only numbers.");
//       return false;
//     }
//   }
// }


// console.log(isNaN(NaN)); // true
// console.log(isNaN(5)); // false
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// class-31 -----------------------------//
// 
// 
// 

// function validateEmail() {
//   var email = document.getElementById("email").value;
//   var addressIsLegal = true;
//   if (email.indexOf(" ") !== -1) {
//     addressIsLegal = false;
//     alert("No spaces allowed in address");
//     return false;
//   }


//   if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
//     addressIsLegal = false;
//   }


//   if (email.indexOf(".") - email.indexOf("@") < 2 ||
//     email.indexOf(".") > email.length - 3) {
//     addressIsLegal = false;
//   }


//   if (addressIsLegal === false) {
//     alert("Please correct email address");
//     return false;
//   }


// }

// abcgmailb@ab.com



// console.log("start");

// try {
//   var greeting = "Hello world!";
//   consle.log(greeting);
// } catch (error) {
//   console.log(error);

// }finally{
//   console.log("mai chalta hi hun hamesha!");

// }


// console.log("end");




function checkPassword() {
  try {
    var pass = document.getElementById("f1").value;
    if (pass.length < 8) {
      throw "Please enter at least 8 characters.";
      
    }
    if (pass.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }
    var numberSomewhere = false;
    for (var i = 0; i < pass.length; i++) {
      if (isNaN(pass(i, i + 1)) === false) {
        numberSomewhere = true;
        break;
      }
    }
    if (numberSomewhere === false) {
       throw "Include at least 1 number.";
    }
  }
  catch (err) {
    console.log(err);
  
  }
}
