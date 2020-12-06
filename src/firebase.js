import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq9OyECIR44PgYAWoIVYDMrciILpt688w",
  authDomain: "slack-clone-9622a.firebaseapp.com",
  projectId: "slack-clone-9622a",
  storageBucket: "slack-clone-9622a.appspot.com",
  messagingSenderId: "665390834625",
  appId: "1:665390834625:web:77974e84488a89ae72c540",
  measurementId: "G-ZP5ZF2K1DQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
