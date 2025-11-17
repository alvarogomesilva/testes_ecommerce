import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdlTSxitrH6JsWFmRg41j1A0JYkU1Mryc",
  authDomain: "loja-bianca-62a90.firebaseapp.com",
  projectId: "loja-bianca-62a90",
  storageBucket: "loja-bianca-62a90.firebasestorage.app",
  messagingSenderId: "1001471029218",
  appId: "1:1001471029218:web:b161ad39a4a177a5ddd3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export { app, database }