// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYzzUJHch0R3TAM3J-pJTVz726ZM4q5I0",
  authDomain: "authentication-5aa96.firebaseapp.com",
  projectId: "authentication-5aa96",
  storageBucket: "authentication-5aa96.appspot.com",
  messagingSenderId: "317939363010",
  appId: "1:317939363010:web:59ce12b3ff21ab42731f5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
