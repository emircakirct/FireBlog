// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6GjkDRmAsYYWjnqB4rbJYJu7dYjspKE",
  authDomain: "fireblog-app-92bab.firebaseapp.com",
  projectId: "fireblog-app-92bab",
  storageBucket: "fireblog-app-92bab.appspot.com",
  messagingSenderId: "61987979602",
  appId: "1:61987979602:web:e0d9f87aa9c4ca7bcc7a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
