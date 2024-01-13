// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtymart-78dfc.firebaseapp.com",
  projectId: "realtymart-78dfc",
  storageBucket: "realtymart-78dfc.appspot.com",
  messagingSenderId: "202909030075",
  appId: "1:202909030075:web:620187f3e76a4ed353bb9e",
  measurementId: "G-D5MWS7YXHX"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
