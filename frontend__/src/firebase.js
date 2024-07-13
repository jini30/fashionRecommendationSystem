// Importing functions from firebase/app and firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB729w_gy_-oTKR_r5PsKsuiO6QRv_QN0",
  authDomain: "weforshe-kms.firebaseapp.com",
  projectId: "weforshe-kms",
  storageBucket: "weforshe-kms.appspot.com",
  messagingSenderId: "100083604168",
  appId: "1:100083604168:web:46d8b59f64b682099223fd",
  databaseURL: "https://console.firebase.google.com/u/0/project/weforshe-kms/database/weforshe-kms-default-rtdb/data/~2F",
  // measurementId: "G-KM9KHPFZWR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initializing db
const db = getFirestore(app);

// initializing storage
const storage = getStorage(app);

// initializing auth 
const auth = getAuth(app);

// exporting db, auth and storage
export { db, auth, storage };

// exporting the app
export default app;
