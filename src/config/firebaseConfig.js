import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  // apiKey: "AIzaSyCjLKHtLaFEzbNnOOxwkI3qUp8bcSGLggA",
  // authDomain: "serenity-app.firebaseapp.com",
  // databaseURL: "https://serenity-app.firebaseio.com",
  // projectId: "serenity-app",
  // storageBucket: "serenity-app.appspot.com",
  // messagingSenderId: "903887800761",
  // appId: "1:903887800761:web:9f7a39af1c1c236b51ce68",
  // measurementId: "G-QV399SM9B5"

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
