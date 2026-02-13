import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAK7p5Z0jbFngWtYpiEO86bsEKJSqSlqTE",
  authDomain: "batch16-46135.firebaseapp.com",
  databaseURL: "https://batch16-46135-default-rtdb.firebaseio.com",
  projectId: "batch16-46135",
  storageBucket: "batch16-46135.firebasestorage.app",
  messagingSenderId: "484175099450",
  appId: "1:484175099450:web:a495c2ce95c63617a56703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();

export {
  auth, createUserWithEmailAndPassword
}