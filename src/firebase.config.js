// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB17bdfmqcTc3UoI9_30GzvkArHT1QVIM",
  authDomain: "thevaultdnd.firebaseapp.com",
  projectId: "thevaultdnd",
  storageBucket: "thevaultdnd.appspot.com",
  messagingSenderId: "135038543970",
  appId: "1:135038543970:web:a94ee3f90363a88229093b",
  measurementId: "G-JK1FRTQSMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;