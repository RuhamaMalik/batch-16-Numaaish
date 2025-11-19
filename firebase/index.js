import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "./firebase.config.js";


////////////////// SignUp

const signUp = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);

  } catch (error) {
    console.log(error);

  }

}
 

document.getElementById("btn")?.addEventListener("click", signUp);


////////////////// SignIn


const login = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // console.log(userCredential.user);
    await sendEmailVerification(auth.currentUser);
    console.log("email sent successfully");
    

  } catch (error) {
    console.log(error);

  }

}

document.getElementById("btn2")?.addEventListener("click", login);