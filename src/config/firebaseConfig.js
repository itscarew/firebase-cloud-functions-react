import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCjLKHtLaFEzbNnOOxwkI3qUp8bcSGLggA",
  authDomain: "serenity-app.firebaseapp.com",
  databaseURL: "https://serenity-app.firebaseio.com",
  projectId: "serenity-app",
  storageBucket: "serenity-app.appspot.com",
  messagingSenderId: "903887800761",
  appId: "1:903887800761:web:9f7a39af1c1c236b51ce68",
  measurementId: "G-QV399SM9B5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
