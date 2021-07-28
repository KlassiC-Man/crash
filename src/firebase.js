import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ-r5aCFhtXtbxkKl8mdG6VtUruptlm1E",
    authDomain: "crash-44799.firebaseapp.com",
    projectId: "crash-44799",
    storageBucket: "crash-44799.appspot.com",
    messagingSenderId: "1082237792828",
    appId: "1:1082237792828:web:3266ff4d40db8494bfc939",
    measurementId: "G-7ELGQ0L7X7"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();

export default firebase;
export {auth, db};