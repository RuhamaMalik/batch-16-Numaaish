import { addDoc, and, auth, collection, db, deleteDoc, doc, getDocs, onSnapshot, or, query, serverTimestamp, updateDoc, where } from "../firebase.config.js";


// const getAllUsers = async () => {
//   const userTable = document.getElementById("all-users");
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     const user = doc.data();
//     userTable.innerHTML += `
//    <tr>
//         <th scope="row">1</th>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.contact}</td>
//         <td>${user.age}</td>
//         <td>${user.isActive ? "Active" : "Block"}</td>
//         <td>
//           <i class="fa-solid fa-eye text-success"></i>
//           <i class="fa-solid fa-trash text-danger"></i>
//         </td>
//       </tr>`
//   });
// }


// getAllUsers()


const getAllUsers = async () => {
  const userTable = document.getElementById("all-users");

  const q = query(collection(db, "users"));


  // const q = query(collection(db, "users"), where("age",  ">", "10"));

  // const q = query(collection(db, "users"), where("isActive",  "!=", false));

  // const q = query(collection(db, "users"), where("skills",  "array-contains", "communication"));

  // const q = query(collection(db, "users"), where("role",  "in", ["admin","user","manager"]));

  // const q = query(collection(db, "users"), where("role",  "not-in", ["admin","manager"]));

  // const q = query(collection(db, "users"), where("skills",  "array-contains-any", ["cooking","writing"]));


  // const q = query(collection(db, "users"),
  //   or(
  //      where("age", "==", "15"),
  //     where("role", "==", "admin")

  //   )
  // )

  //   const q = query(collection(db, "users"),
  //   and(
  //      where("age", "==", "15"),
  //     where("role", "==", "manager")

  //   )
  // )

  const unsubscribe = await onSnapshot(q, (querySnapshot) => {
    userTable.innerHTML = "";
    let index = 0;
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      userTable.innerHTML += `
   <tr>
        <th scope="row">${++index}</th>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.contact}</td>
        <td>${user.age}</td>
        <td>${user.isActive ? "Active" : "Block"}</td>
        <td>
          <i title="update status" style="cursor:pointer" id="eye" onClick="updateStatus('${doc.id}',${user.isActive} )" class="pointer me-4  fa-solid ${user.isActive ? ' fa-eye text-success' : ' fa-eye-slash text-danger'} "></i>
                    
          <i title="delete" style="cursor:pointer" onclick="deleteUser('${doc.id}')" class="fa-solid fa-trash text-danger"></i>
        </td>
      </tr>`
    });
  });

}


getAllUsers();

/////////// update user status

window.updateStatus = async (id, status) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
      isActive: !status,
      updateTimesTamp: serverTimestamp()
    });

  } catch (error) {
    console.log(error);

  }
}


//////////////////// delete user

window.deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
  } catch (error) {
    console.log(error);

  }
}


///////////////////// add product





const uploadImage = async (id) => {
  const file = document.getElementById(id);
  const selectedImg = file.files[0];
  const cloudName = "dxo6r3i8k";
  const presetName = "kuch-bhi";

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
    return {
      image: data?.secure_url,
      imageId: data?.public_id
    }

  } catch (error) {
    console.log(error);

  }

}

const addProduct = async () => {
  // const productImg = document.getElementById("image");
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const stock = document.getElementById("stock").value;

  try {

    ////////////// image upload

    const image = await uploadImage("image");
    const docRef = await addDoc(collection(db, "products"), {
      image,
      title,
      description,
      price,
      category,
      isAvailable: true,
      stock,
      timestamp: serverTimestamp(),
      userId : auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);


document.getElementById("title").value ="";
document.getElementById("desc").value="";
document.getElementById("price").value ="";
 document.getElementById("category").value ="";
 document.getElementById("stock").value ="";


  } catch (error) {
    console.log(error);

  }

}


const productBtn = document.getElementById("product-btn");

if (productBtn) productBtn.addEventListener("click", addProduct);