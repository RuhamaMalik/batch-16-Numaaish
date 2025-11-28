import { auth, onAuthStateChanged, getDoc, doc, db } from "../firebase.config.js";


onAuthStateChanged(auth, async (user) => {

  if (user) {
    const uid = user?.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const userData = docSnap.data();
      let uname = document?.querySelector("#uname");
      let email = document?.querySelector("#email");
      let contact = document?.querySelector("#contact");
      let age = document?.querySelector("#age");
      let bio = document?.querySelector("#bio");
      
      if (userData) {
        uname.value = userData?.name;
        contact.value = userData?.contact;
        age.value = userData?.age;
        bio.value = userData?.bio || "add bio here";
        email.innerHTML = userData?.email;
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