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
  updateDoc,
  onSnapshot,
  query,
  getDocs,
  collection,
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



    if (!user.emailVerified) {
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
  localStorage.removeItem("role");
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




////////////////////////////// Update Profile


// const updateProfile = async () => {
//   const name = document.getElementById("uname").value;

//   try {
//     const userRef = doc(db, "users", auth.currentUser.uid);
// await updateDoc(userRef, {
//   name
// });
//   } catch (error) {
//     console.log(error);

//   }
// }

// document.getElementById("uname")?.addEventListener("blur", updateProfile);



const inputs = document.querySelectorAll(".update");

inputs.forEach((input) => {

  input.addEventListener("blur", async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      [input.name]: input.value,
    });
  })

})


///////////////////////// 


const uploadImage = async () => {
  const file = document.getElementById("image");
  const selectedImg = file.files[0];
  const cloudName = "da9vibnc0";
  const presetName = "batch-16";

  const formData = new FormData();
  formData.append("file", selectedImg);
  formData.append("cloud_name", cloudName);
  formData.append("upload_preset", presetName);


  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData
    });


    const data = await response.json();

    const userRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(userRef, {
      profImage: data?.secure_url,
      imageId: data?.public_id
    });

    const image = document.getElementById("profile-img")
    if (image) image.src = data?.secure_url;

  } catch (error) {
    console.log(error);

  }

}

const uploadBtn = document.getElementById("upload");
if (uploadBtn) addEventListener("click", uploadImage)




/////////////////////////// Get All Products (Home page)

let homeProducts = document.getElementById("home-products");

const getAllProducts = async () => {
  try {
    const ProductsRef = query(collection(db, "products"));

    const querySnapshot = await getDocs(ProductsRef);
    querySnapshot.forEach((doc) => {

      // console.log(doc.id, " => ", doc.data());
      const product = doc.data();
      homeProducts.innerHTML += `
 <div class="card" style="width: 18rem;">
      <img src="${product.image.image}"
        class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.price}</p>
        <a href="#" class="btn btn-danger"  >view Details</a>
      </div>
    </div>
`

    });


  } catch (error) {
    console.log(error);

  }
}

if (homeProducts) getAllProducts();
