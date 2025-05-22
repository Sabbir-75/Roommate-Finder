import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDAOaTUjriELy4bGH6JLfBj9RflKQYBbvM",
  authDomain: "roommate-hunt-f15f1.firebaseapp.com",
  projectId: "roommate-hunt-f15f1",
  storageBucket: "roommate-hunt-f15f1.firebasestorage.app",
  messagingSenderId: "1023986088995",
  appId: "1:1023986088995:web:253feb8b599b8710c70596"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);