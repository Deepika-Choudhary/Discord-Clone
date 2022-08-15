// import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsfO4Vt_6eDxZRFK54x18A70PnoPhlNSc",
  authDomain: "discord-clone-ebec0.firebaseapp.com",
  projectId: "discord-clone-ebec0",
  storageBucket: "discord-clone-ebec0.appspot.com",
  messagingSenderId: "1077855182160",
  appId: "1:1077855182160:web:7af866b12547cc407de055",
  measurementId: "G-XGHYQCBFVX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider, db };
// export default db;
