const role = localStorage.getItem("role");


if(!role){
  window.location.replace("/");
}

if(role && role !== "admin"){
   window.location.replace("/");
}