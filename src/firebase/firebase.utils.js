import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKzQIDLOxE_4ROwF8Y89N0lfl73F2RujI",
  authDomain: "ekomerc-b859a.firebaseapp.com",
  databaseURL: "https://ekomerc-b859a.firebaseio.com",
  projectId: "ekomerc-b859a",
  storageBucket: "ekomerc-b859a.appspot.com",
  messagingSenderId: "760037469874",
  appId: "1:760037469874:web:5004e3e90d1a3846ee23ab",
  measurementId: "G-3KZZNDGH77",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
