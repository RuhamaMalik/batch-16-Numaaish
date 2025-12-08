import { auth, onAuthStateChanged, getDoc, doc, db } from "../firebase.config.js";


onAuthStateChanged(auth, async (user) => {

  if (user) {
    const uid = user?.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const userData = docSnap.data();

      localStorage.setItem("role", userData?.role);

      ////////// settings
      let profTitle = document.getElementById("prof-title");
      let adminTab = document.getElementById("admin-tab");



      if (profTitle) profTitle.innerText = `${userData?.role} Profile`
      if (adminTab && userData?.role !== "admin")adminTab.style.display = "none";


      ///////////////// profile Data
      let uname = document?.querySelector("#uname");
      let email = document?.querySelector("#email");
      let contact = document?.querySelector("#contact");
      let age = document?.querySelector("#age");
      let bio = document?.querySelector("#bio");
      let image = document?.querySelector("#profile-img");

      if (userData) {
        if (uname) uname.value = userData?.name;
        if (contact) contact.value = userData?.contact;
        if (age) age.value = userData?.age;
        if (bio) bio.value = userData?.bio || "add bio here";
        if (email) email.innerHTML = userData?.email;
        if (image && userData?.profImage) image.src =userData?.profImage;

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