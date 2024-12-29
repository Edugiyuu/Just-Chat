// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBr6uYSVYDuMnulxp-r9mBiPgwlcyZZ_k",
  authDomain: "just-chat-4f4e0.firebaseapp.com",
  projectId: "just-chat-4f4e0",
  storageBucket: "just-chat-4f4e0.firebasestorage.app",
  messagingSenderId: "29467029398",
  appId: "1:29467029398:web:653bd920e36e186da037b7",
  measurementId: "G-ZKY8NT4QB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)