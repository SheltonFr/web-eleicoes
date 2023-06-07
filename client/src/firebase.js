// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqW_XFfTEvLtrANovUPGv0GJg6MQJd_ho",
  authDomain: "react-admin-dashboard-5a835.firebaseapp.com",
  projectId: "react-admin-dashboard-5a835",
  storageBucket: "react-admin-dashboard-5a835.appspot.com",
  messagingSenderId: "573826287079",
  appId: "1:573826287079:web:997cf076aaa0b612fa6942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();