import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRuyj6kFrNrk-lw8ZUvux0mfn_xcTNOD4",
  authDomain: "instagram-clone-683d4.firebaseapp.com",
  databaseURL: "https://instagram-clone-683d4-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-683d4",
  storageBucket: "instagram-clone-683d4.appspot.com",
  messagingSenderId: "758415892529",
  appId: "1:758415892529:web:aa61c666572458f336b510",
  measurementId: "G-LT2E7TBQTN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
