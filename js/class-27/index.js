// console.log(body.children[0]);
// console.log(body.firstChild); /// count text(junk artifacts)
// console.log(body.lastChild);


// var child  = document.getElementById("firstChild");
// console.log(child.parentNode);



// var span = document.getElementById("span");
// console.log(span.parentNode.parentNode); // 


// var second = document.getElementById("second");
// console.log(second.nextSibling);
// console.log(second.nextElementSibling);
// console.log(second.previousSibling);
// console.log(second.previousElementSibling);


// var h1 = document.getElementById("second");
// var b = document.getElementById("bold");

// console.log(h1.nodeType);
// console.log(h1.nodeName);
// console.log(b.nodeType);
// console.log(b.nodeName);

// // console.log(h1.firstChild.nodeValue);
// // console.log(h1.nodeValue); //null
// console.log(b.firstChild.nodeValue);


// var list = document.getElementById("list");
// var allLi = list.getElementsByTagName("li");
// var total = document.getElementById("total");

// // console.log(allLi.length);
// // console.log(total);

// total.innerText = "total Items : " + allLi.length;


// var ele = document.getElementById("testId");

// var isExist = ele.hasAttribute("title"); // return boolean
// var title = ele.getAttribute("title"); // return attribute value
//  ele.setAttribute("class", "myClass"); // 

// console.log(isExist);
// console.log(title);


// var ele = document.getElementById("testId");

// console.log(ele.attributes.length);
// // console.log(ele.attributes[1]);
// console.log(ele.attributes[1].nodeType);
// console.log(ele.attributes[1].nodeName);
// console.log(ele.attributes[1].nodeValue);



// var ul = document.getElementById("list");

// console.log(ul);

// var li = document.createElement("li") // <li></li>
// var text = document.createTextNode(`Item 1`);
// li.appendChild(text);

// var li2 = document.createElement("li") // <li></li>
// var text2 = document.createTextNode(`Item 2`);
// li2.appendChild(text2);

// ul.appendChild(li);
// ul.appendChild(li2);




// var img = document.createElement("img");
// // img.setAttribute("src", "https://hips.hearstapps.com/hmg-prod/images/pale-purple-cosmos-flower-1656258166.jpeg?crop=1.00xw:0.834xh;0,0.160xh&resize=980:*")
// img.setAttribute("src", "./img.webp")
// img.setAttribute("width", "300")
// img.className = "happy"

// var body = document.getElementsByTagName("body")[0];
// // console.log(body);
// body.appendChild(img)


// ////////////////////////// Todo List


var newTask = document.getElementById("newTask");
var ul = document.getElementById("task");


function addTask() {
  if (newTask.value === "") {
    alert("Please Enter your task!")
  } else {

    var li = document.createElement("li");
    var text = document.createTextNode(newTask.value);
    li.appendChild(text);

    // Delete

    var deleteButton = document.createElement("button");
    var deleteBtnText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteBtnText);
    deleteButton.setAttribute("onclick", "deleteTask(this)")
    li.appendChild(deleteButton);

    //////// Edit 

    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "editTask(this)");
    editBtn.className = "editBtn "
    li.appendChild(editBtn);


    ul.appendChild(li);
  }

newTask.value = "";

}

function editTask(btn){
var oldValue = btn.parentNode.firstChild.nodeValue;
var newValue = prompt("Edit Task", oldValue)
btn.parentNode.firstChild.nodeValue = newValue;
}

function deleteTask(btn) {
  // console.log(btn);
  // console.log(btn.parentNode);
  btn.parentNode.remove();
}


function deleteAll() {
  ul.innerHTML = "";
}