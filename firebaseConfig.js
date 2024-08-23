import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Adicione isso
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBb0JI1fdsqJt0-lXxMzNg2VtCMY6OBTjs",
  authDomain: "auth-firebase-projeto-au-c971e.firebaseapp.com",
  projectId: "auth-firebase-projeto-au-c971e",
  storageBucket: "auth-firebase-projeto-au-c971e.appspot.com",
  messagingSenderId: "567268964765",
  appId: "1:567268964765:web:1b73ff39ee80880b409774",
  measurementId: "G-JMPYJVRR06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app); // Adicione isso

export { app, auth, analytics, firestore };
