// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsWt4AMWl_mo-Ok5g1YVQMmjCGpfs6IFI",
  authDomain: "rawg-19347.firebaseapp.com",
  databaseURL: "https://rawg-19347-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rawg-19347",
  storageBucket: "rawg-19347.firebasestorage.app",
  messagingSenderId: "416217402885",
  appId: "1:416217402885:web:f1fb4f72db424c8c52966c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
export { firebaseApp, db }