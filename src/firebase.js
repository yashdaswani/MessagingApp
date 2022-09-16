// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDshZqnpsJp_W8M1Ne5aoDX0K6uaIN5Fo0",
  authDomain: "messagingsite-86166.firebaseapp.com",
  projectId: "messagingsite-86166",
  storageBucket: "messagingsite-86166.appspot.com",
  messagingSenderId: "792860863166",
  appId: "1:792860863166:web:a2918408b640566a6f4cef",
  measurementId: "G-EPMKSP5GZM"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(); 
 export const storage = getStorage();
 export const db=getFirestore();