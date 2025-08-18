// function greet (){
//   var name = "Ayesha";
//   alert(name);
// console.log(">>>>>>>>>>> kuch or code");
// }


// function azadiMbarak (){
//   var name = prompt("Enter your name");
//   alert('Happy independece day ' + name +  ' !')
// }




function readMore (){
  var fullPararaph = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam hic quidem optio ducimus similique dolorem, explicabo temporibus fugit autem voluptas eum quis natus dolorum sequi mollitia eligendi ad enim laborum ipsum modi facere minus distinctio. Alias laborum a nostrum facilis laboriosam culpa corrupti at ad impedit soluta. Iste velit voluptatibus suscipit impedit temporibus totam perspiciatis, possimus nesciunt in. Non harum nihil dicta veritatis mollitia voluptatibus quas consequuntur similique, atque unde, tenetur quis nam corrupti sed quos, obcaecati ea. Nisi reprehenderit debitis velit earum sapiente odit porro voluptates ratione, deleniti, aperiam quasi quas voluptate dolores repudiandae neque doloribus ab animi?

  <a href="JavaScript:void(0)" onclick="readLess()"  >Read less</a>

  `
var para = document.getElementById("para");
// para.innerText = fullPararaph;
para.innerHTML = fullPararaph;

}



function readLess(){
  var halfPara = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam hic quidem optio ducimus similique dolorem, explicabo temporibus fugit autem voluptas
  <a href="JavaScript:void(0)" onclick="readMore()"  >Read more...</a>
  `
  var para = document.getElementById("para");
para.innerHTML = halfPara;

}