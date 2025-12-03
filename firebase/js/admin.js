import { collection, db, deleteDoc, doc, getDocs, onSnapshot, query, serverTimestamp, updateDoc, where } from "../firebase.config.js";


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

  const q = query(collection(db, "users"), where("age",  ">", "10"));

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

window.deleteUser =async (id)=>{
try {
  await deleteDoc(doc(db, "users",id));
} catch (error) {
  console.log(error);
  
}
}