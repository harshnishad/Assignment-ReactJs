import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBoudJvil0kFgvaKpy0EW9i3wmrXvzkKb8",
  authDomain: "assigment-23a2f.firebaseapp.com",
  projectId: "assigment-23a2f",
  storageBucket: "assigment-23a2f.firebasestorage.app",
  messagingSenderId: "964048749871",
  appId: "1:964048749871:web:274691eaac9947bd0f0dda",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
