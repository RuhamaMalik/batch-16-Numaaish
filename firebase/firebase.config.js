import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,

  onAuthStateChanged,

  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"; // realtime db

import {
  getFirestore,
  doc,
  setDoc, serverTimestamp,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  onSnapshot,

  deleteDoc,
  where,
  or,
  and
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAK7p5Z0jbFngWtYpiEO86bsEKJSqSlqTE",
  authDomain: "batch16-46135.firebaseapp.com",
  databaseURL: "https://batch16-46135-default-rtdb.firebaseio.com",
  projectId: "batch16-46135",
  storageBucket: "batch16-46135.firebasestorage.app",
  messagingSenderId: "484175099450",
  appId: "1:484175099450:web:a495c2ce95c63617a56703"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app); // realtime db
const db = getFirestore(app);


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,


  ref,
  set,
  database,

  db,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  updateDoc,
  collection,
  getDocs,

  query,
  onSnapshot,

  deleteDoc,
  where,
   or,
   and
}