import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLbAuiHJQ9VuclnK3Hsc477SDRQoyGAy4",
  authDomain: "clone-yt-66a68.firebaseapp.com",
  projectId: "clone-yt-66a68",
  storageBucket: "clone-yt-66a68.appspot.com",
  messagingSenderId: "562062693310",
  appId: "1:562062693310:web:962b35d9df01c8b1125fef",
  measurementId: "G-J8304FLKZZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export { db , auth , provider };

