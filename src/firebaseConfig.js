import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClHZzzoxDhX6Eh664Zm4SrMTxa4kCeKhg",
  authDomain: "typing-website-2af94.firebaseapp.com",
  projectId: "typing-website-2af94",
  storageBucket: "typing-website-2af94.appspot.com",
  messagingSenderId: "668214125314",
  appId: "1:668214125314:web:cd6ef37da29f29d86a181b",
  measurementId: "G-VTNKMC6E67"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };