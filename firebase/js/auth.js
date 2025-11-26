import { auth, onAuthStateChanged, getDoc, doc, db } from "../firebase.config.js";


onAuthStateChanged(auth, async (user) => {

  if (user) {
    const uid = user?.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const userData = docSnap.data();

     

      if(userData){
     document?.getElementById("username")?.innerText = userData?.name || "";
      }
    


    } else {
      console.log("No such document!");
    }
  } else {
    // console.log("sign out");
    if (window.location.pathname === "/html/profile.html") {
      window.location.replace("/html/login.html");
    }

  }
})