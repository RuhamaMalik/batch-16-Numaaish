import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  database,
  set,
  ref,
  setDoc,
  doc,
  db,
  serverTimestamp,
} from "./firebase.config.js";

////////////////// SignUp

const signUp = async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      age,
      contact,
      email,
      isActive: true,
      timestamp: serverTimestamp(),
      role: "user",
    });

    if(!user.emailVerified){
       await sendEmailVerification(auth.currentUser);
      signOut(auth);
      alert("Please verify your email")
    window.location.replace("/html/login.html");
    }
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("signup-form")?.addEventListener("submit", signUp);

////////////////// SignIn

const login = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // console.log(userCredential.user);
    if (!auth.currentUser.emailVerified) {
      console.log(auth.currentUser);

      await sendEmailVerification(auth.currentUser);
      console.log("email sent successfully");
    } else {
      window.location.replace("/");
    }
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("btn2")?.addEventListener("click", login);

/////////////////////  forget Password

const forgetPassword = async () => {
  try {
    const email = document.getElementById("email").value;
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};

document
  .getElementById("forget-paswd")
  ?.addEventListener("click", forgetPassword);

//////////////////////// Reset Password

const ResetPassword = async () => {
  try {
    const user = auth.currentUser;
    const newPassword = document.getElementById("new-pswd").value;
    if (newPassword && newPassword.length >= 6) {
      await updatePassword(user, newPassword);
      alert("Password Update Successfully!");
    } else {
      alert("Enter atleast 6 characters");
    }
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("reset-btn")?.addEventListener("click", ResetPassword);

///////////////////////////////  Logout

document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth);
});

//////////////////////////// SignIn with Google

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // console.log(">>>>>>>> ",result.user);
    window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

document
  .getElementById("google-btn")
  ?.addEventListener("click", signInWithGoogle);

// //////////////// Real time db

// console.log("Hello >>>>>>>>>>> ");

// async function writeUserData(userId, name, email, contact) {

//  try {
//    await set(ref(database, 'users/' + userId), {
//     username: name,
//     email: email,
//     contact
//   });
//  } catch (error) {
//   console.log("Error in users >>>>> ",error);

//  }
// }
// writeUserData(1, "Ruhama Gull", "ruhama@gmail.com", 659899545);
