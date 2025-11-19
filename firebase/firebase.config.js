import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";




const firebaseConfig = {
  apiKey: "AIzaSyAK7p5Z0jbFngWtYpiEO86bsEKJSqSlqTE",
  authDomain: "batch16-46135.firebaseapp.com",
  projectId: "batch16-46135",
  storageBucket: "batch16-46135.firebasestorage.app",
  messagingSenderId: "484175099450",
  appId: "1:484175099450:web:a495c2ce95c63617a56703"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();



export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
}