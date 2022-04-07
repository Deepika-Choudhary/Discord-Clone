import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJxWoBYuFTueRX-S5l0tFoYM_bAgHCBtY",
  authDomain: "discored-clone.firebaseapp.com",
  projectId: "discored-clone",
  storageBucket: "discored-clone.appspot.com",
  messagingSenderId: "134712771677",
  appId: "1:134712771677:web:a58e40b73df8358857b9b4",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
// export default db;
