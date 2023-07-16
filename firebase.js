// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-xGP7_xhYLhbaANNT0Xx6HbM33iMZLw",
  authDomain: "shoe-store-e9a63.firebaseapp.com",
  projectId: "shoe-store-e9a63",
  storageBucket: "shoe-store-e9a63.appspot.com",
  messagingSenderId: "786271611149",
  appId: "1:786271611149:web:9df47d880368622678a844",
  measurementId: "G-GW4Y15ELKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

