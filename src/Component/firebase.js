// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoudJvil0kFgvaKpy0EW9i3wmrXvzkKb8",
  authDomain: "assigment-23a2f.firebaseapp.com",
  projectId: "assigment-23a2f",
  storageBucket: "assigment-23a2f.firebasestorage.app",
  messagingSenderId: "964048749871",
  appId: "1:964048749871:web:274691eaac9947bd0f0dda",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;