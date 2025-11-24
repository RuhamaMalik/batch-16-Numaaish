import { auth, onAuthStateChanged } from "../firebase.config.js";


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(">>>>>>>>>> user signIn", user);

  } else {
    // console.log("sign out");
    if (window.location.pathname === "/html/profile.html" ) {
      window.location.replace("/html/login.html");
    }

  }
})