// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7IGSeV9FncKf3k1jq7kPPwvvpDWkzig",
  authDomain: "online-job-portal-9afa0.firebaseapp.com",
  projectId: "online-job-portal-9afa0",
  storageBucket: "online-job-portal-9afa0.appspot.com",
  messagingSenderId: "664634547931",
  appId: "1:664634547931:web:5a63a2a78fe0cc4c7c36fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {db ,auth};