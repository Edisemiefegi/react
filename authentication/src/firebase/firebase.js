import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FsBLo85Dec_hR9BQp3gPq46A42sa1wQ",
  authDomain: "react-project-21cfd.firebaseapp.com",
  projectId: "react-project-21cfd",
  storageBucket: "react-project-21cfd.firebasestorage.app",
  messagingSenderId: "67806739799",
  appId: "1:67806739799:web:ee5f5836f3a482e3071212",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
