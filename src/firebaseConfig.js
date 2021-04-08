import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBxbvmHywt6X7jHAkad5jxqoTeSomRidw",
    authDomain: "tasktracker-f125f.firebaseapp.com",
    projectId: "tasktracker-f125f",
    storageBucket: "tasktracker-f125f.appspot.com",
    messagingSenderId: "727833059215",
    appId: "1:727833059215:web:62d5f2e49aa8d9cfd9f5fa"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);