import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeoiIBqSZtbdk-CraRmqZi35av63ve-64",
  authDomain: "fb-messenger-react-fireb-b78d6.firebaseapp.com",
  projectId: "fb-messenger-react-fireb-b78d6",
  storageBucket: "fb-messenger-react-fireb-b78d6.appspot.com",
  messagingSenderId: "98254022317",
  appId: "1:98254022317:web:0a0a059e1f70543c7c0824",
  measurementId: "G-KY09LVFRQL",
});

const db = firebaseApp.firestore();

export default db;
