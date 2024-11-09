// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Lh6DctNnI1IvsA4OwNpLE5N1yTDWS9s",
  authDomain: "email-password-ed24b.firebaseapp.com",
  projectId: "email-password-ed24b",
  storageBucket: "email-password-ed24b.firebasestorage.app",
  messagingSenderId: "826158388329",
  appId: "1:826158388329:web:0cb3e09cac73892d5f7ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);