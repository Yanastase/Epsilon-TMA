import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSJk4R0k5FU3gdAToArcW6_HJ3G279d9o",
  authDomain: "ma-tma-d7590.firebaseapp.com",
  projectId: "ma-tma-d7590",
  storageBucket: "ma-tma-d7590.appspot.com",
  messagingSenderId: "874606360925",
  appId: "1:874606360925:web:34ce4ce0490539507850b4",
  measurementId: "G-5FHX9FVGL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };