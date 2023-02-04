import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQ4fqFRxUn5Ag1S6nRGKEcH0zyDwZvo8I",
  authDomain: "imoviesdb-61434.firebaseapp.com",
  projectId: "imoviesdb-61434",
  storageBucket: "imoviesdb-61434.appspot.com",
  messagingSenderId: "914930607291",
  appId: "1:914930607291:web:340ce7da5dcff35ae0359e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
