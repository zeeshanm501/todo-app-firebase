// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0X91ve8mFqLweEXjrnsGdHKfROKffEcY",
  authDomain: "todo-app-firebase-3a4cc.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-3a4cc-default-rtdb.firebaseio.com",
  projectId: "todo-app-firebase-3a4cc",
  storageBucket: "todo-app-firebase-3a4cc.appspot.com",
  messagingSenderId: "1030287164641",
  appId: "1:1030287164641:web:15c9b9607e4ca1f1fe23a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app