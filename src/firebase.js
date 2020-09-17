// const firebaseConfig = {
//   apiKey: "AIzaSyDVBwWgNbym67sXd7kBHjhB0UGhmSDLGGs",
//   authDomain: "todo-app-cp-94482.firebaseapp.com",
//   databaseURL: "https://todo-app-cp-94482.firebaseio.com",
//   projectId: "todo-app-cp-94482",
//   storageBucket: "todo-app-cp-94482.appspot.com",
//   messagingSenderId: "392119025989",
//   appId: "1:392119025989:web:5349ac46ca82c18fdffe2c",
//   measurementId: "G-GW566V58WJ"
// };
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVBwWgNbym67sXd7kBHjhB0UGhmSDLGGs",
  authDomain: "todo-app-cp-94482.firebaseapp.com",
  databaseURL: "https://todo-app-cp-94482.firebaseio.com",
  projectId: "todo-app-cp-94482",
  storageBucket: "todo-app-cp-94482.appspot.com",
  messagingSenderId: "392119025989",
  appId: "1:392119025989:web:5349ac46ca82c18fdffe2c",
  measurementId: "G-GW566V58WJ"
});

const db = firebaseApp.firestore();

export default db;

